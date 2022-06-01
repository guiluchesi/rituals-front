import { Box, Flex, Tag, Button, Container } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import { Header } from "../components/Header";
import { GlassCard } from "../components/Card";
import { Answer } from "../components/Answer";
import headerImage from "../assets/img/answer-header-banner.jpg";

export const Topic = () => {
  return (
    <>
      <Header backgroundImage={headerImage}>
        <Flex mt="60px" alignItems="center">
          <Box
            bgColor="brand.300"
            p="0 20px"
            color="#0B0B1A"
            fontSize="28px"
            fontWeight={900}
          >
            Check-in
          </Box>
          <Tag
            minH="unset"
            bgColor="brand.700"
            color="white"
            fontSize="12px"
            borderRadius="15px"
            p="2px 10px"
            ml={5}
          >
            Once a Week
          </Tag>
          <Tag
            minH="unset"
            bgColor="brand.800"
            color="white"
            fontSize="12px"
            borderRadius="15px"
            p="2px 10px"
            ml={4}
          >
            Company
          </Tag>
        </Flex>

        <Flex alignItems="center" justifyContent="space-between" mt={6}>
          <Flex>
            <Button
              variant="ghost"
              fontSize="20px"
              color="#fff"
              borderColor="white"
              p="20px 30px"
            >
              Answers
            </Button>
            <Button
              variant="ghost"
              fontSize="20px"
              color="#525F7F"
              ml={4}
              p="20px 30px"
            >
              Analytics
            </Button>
          </Flex>
          <Box>
            <Link to="/">
              <Button
                leftIcon={<ArrowBackIcon transform="scale(1.3)" />}
                bgColor="#32304A"
                color="brand.300"
                fontWeight={500}
                p="10px 28px 10px 17px"
              >
                Back
              </Button>
            </Link>
          </Box>
        </Flex>
      </Header>
      <Box bgColor="brand.800" pb={12}>
        <Container
          maxWidth={["90%", "576px", "768px", "992px", "1300px", "1500px"]}
        >
          <GlassCard py={10}>
            <Container>
              <Answer />
              <Answer mt={8} />
              <Answer mt={8} />
              <Answer mt={8} />
            </Container>
          </GlassCard>
        </Container>
      </Box>
    </>
  );
};
