import React, { useState } from 'react';

type DataItem = {
  [key: string]: string | number;
};

const createDataItem = (): DataItem => ({
  "AGRE-INDX-ID_selected": "596955785",
  "STAT-CD_selected": "AA",
  "EVENT-ID_selected": "1598533511",
  "PRCS-ACCT-DT_selected": "20220701",
  "PHYS-OBJ-ID_selected": "nan",
  "VEH_NUM": "-",
  "UPD_CD": "-",
  "XXX": "-",
  "YYY": "-",
  "ZZZ": "-",
  "CHG_CD": "-",
});

const demoData: DataItem[] = Array(4).fill(null).map(createDataItem);

const getPrimaryKeys = (item: DataItem): string[] => {
  return Object.keys(item).filter(key => key.endsWith('_selected'));
};

const getNonPrimaryKeys = (item: DataItem): string[] => {
  return Object.keys(item).filter(key => !key.endsWith('_selected'));
};

const SubTable: React.FC = () => (
  <table className="w-full border-collapse mt-2 "> {/* Added margin-left */}
    <thead>
      <tr className="bg-gray-200">
        <th className="border p-1">Policy Center</th>
        <th className="border p-1">SDk</th>
        <th className="border p-1">TSMAS</th>
        <th className="border p-1">Core Events</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border p-1">uuu</td>
        <td className="border p-1">iii</td>
        <td className="border p-1">BBB</td>
        <td className="border p-1">lll</td>
      </tr>
    </tbody>
  </table>
);

const ExpandableDataRow: React.FC<{ isExpanded: boolean; onToggle: () => void }> = ({ isExpanded, onToggle }) => {
  return (
    <>
      <tr className="">
        <td className="border p-1 bg-gray-100 ">
          <button onClick={onToggle}>
            {isExpanded ? "-" : "+"} {/* Removed 'Row' text */}
          </button>
        </td>
        <td className="border p-1">XX</td>
        <td className="border p-1">XX</td>
        <td className="border p-1">XX</td>
        <td className="border p-1">XX</td>
        <td className="border p-1">XX</td>
      </tr>
      {isExpanded && (
        <tr>
          <td className="border p-1" colSpan={7}>
            <SubTable />
          </td>
        </tr>
      )}
    </>
  );
};

const ExpandableNonPrimaryKeyRow: React.FC<{ label: string; value: string; primaryKeys: string[]; item: DataItem }> = ({ label, value, primaryKeys, item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedSubRows, setExpandedSubRows] = useState<boolean[]>(Array(5).fill(false));

  const toggleSubRow = (index: number) => {
    const newExpandedSubRows = [...expandedSubRows];
    newExpandedSubRows[index] = !newExpandedSubRows[index];
    setExpandedSubRows(newExpandedSubRows);
  };

  return (
    <>
      <tr className="bg-white">
        <td className="border p-1 bg-gray-300"></td>
        <td className="border p-1">
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? '- ' : '+ '}{label}
          </button>
        </td>
        <td className="border p-1">{value}</td>
        {primaryKeys.map(key => (
          <td key={key} className="border p-1">{item[key.replace('_selected', '')]}</td>
        ))}
      </tr>
      {isExpanded && (
        <tr>
          <td></td>
          <td></td>
          <td colSpan={primaryKeys.length + 3} className="border p-1">
            <table className="w-full border-collapse">
              <tbody>
                {Array(5).fill(null).map((_, index) => (
                  <ExpandableDataRow 
                    key={index}
                    isExpanded={expandedSubRows[index]}
                    onToggle={() => toggleSubRow(index)}
                  />
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      )}
    </>
  );
};

const RenderSection: React.FC<{ item: DataItem }> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const primaryKeys = getPrimaryKeys(item);
  const nonPrimaryKeys = getNonPrimaryKeys(item);

  return (
    <div className="mb-4">
      <button
        className="w-full text-left p-2 bg-gray-200 hover:bg-gray-300"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? '- ' : '+ '}Section
      </button>
      {isExpanded && (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-1 bg-gray-300"></th>
              <th className="border p-1">Field</th>
              <th className="border p-1">Value</th>
              {primaryKeys.map(key => (
                <th key={key} className="border p-1">{key.replace('_selected', '')}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {nonPrimaryKeys.map((key) => (
              <ExpandableNonPrimaryKeyRow 
                key={key} 
                label={key} 
                value={item[key] as string} 
                primaryKeys={primaryKeys}
                item={item}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Test Lab Demo</h1>
      {demoData.map((item, index) => (
        <RenderSection key={index} item={item} />
      ))}
    </div>
  );
};

export default Page;