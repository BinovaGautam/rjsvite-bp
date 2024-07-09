import { Timestamp } from "firebase/firestore";

export interface IBaseProfile {
    phone : string;
    email ?: string;
    id : string;
    name : string;
    img ?: string;
}

export interface IPatient extends IBaseProfile {
    profileId : string;
    address ?: string;
    pinCode ?: string;
    dob ?: string;
    age ?: number;
    gender ?: string;
    isMaster ?: boolean;
    createdAt ?: string;
}

// declare type for Patient keys to be used in PatientForm 
export type IPatientKeys = keyof IPatient;

export type IAppointmentStatus = "pending" | "confirmed" | "waiting" | "screening" | "cancelled" | "completed";

export interface IBaseAppointment { 
    //BaseProfile added to it as it is noSQL db and we need to store the name of the patient and doctor
    id : string;
    patientId : string;
    patient: IPatient;
    doctor : IBaseProfile;
    doctorId : string;
    dateTime : string | Timestamp;
    step ?: number;
    status : IAppointmentStatus;
    createdAt : string;
    updatedAt : string;
    visitTime ?: Date | string;
}

export interface IAppointmentData extends Omit<IBaseAppointment, "id" |  "doctor" | "createdAt" | "updatedAt">{}