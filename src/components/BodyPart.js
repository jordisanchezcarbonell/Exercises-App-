// Import the necessary functions from 'react'
// Import the necessary components from '@mui/material'
import { Stack } from '@mui/material';
import { smoothScrollTo } from '../utils/smoothScrollTo';
import { getScrollPositions } from '../utils/scrollPosition';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  // Get the scroll positions using the utility function
  const { scrollTop, scrollLeft } = getScrollPositions();

  // Define the common styles for the Stack component
  const commonStyles = {
    background: '#fff',
    borderBottomLeftRadius: '20px',
    width: '270px',
    height: '282px',
    cursor: 'pointer',
    gap: '47px',
  };

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              ...commonStyles,
              borderTop: '4px solid #FF2625',
            }
          : commonStyles
      }
      onClick={() => {
        // Set the body part and smoothly scroll to the specified positions
        setBodyPart(item);
        smoothScrollTo(scrollTop, scrollLeft);
      }}
    ></Stack>
  );
};

export default BodyPart;
