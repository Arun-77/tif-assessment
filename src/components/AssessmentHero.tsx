import React, { useState } from "react";
import { Box, Heading, useToast, Button } from "@chakra-ui/react";

interface IAssessmentHeroProps {}

const AssessmentHero: React.FunctionComponent<IAssessmentHeroProps> = (
  props
) => {
  const [toastOpen, setToastOpen] = useState<boolean>(false);
  const toast = useToast();
  return (
    <Box>
      <Heading>Hi</Heading>
      <Button
        onClick={() =>
          toast({
            title: "No mouse cursor detected",
            description: "Make sure tye cursor remains inside browser window",
            status: "warning",
            position: "top",
            duration: 5000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    </Box>
  );
};

export default AssessmentHero;
