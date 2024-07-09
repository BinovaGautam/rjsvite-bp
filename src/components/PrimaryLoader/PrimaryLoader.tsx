
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function PrimaryLoader() {
  return (
    <Box >
      <CircularProgress size={14} color='warning'/>
    </Box>
  );
}