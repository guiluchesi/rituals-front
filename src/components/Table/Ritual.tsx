import {
  Flex,
  Button,
  Tag,
  StyleProps,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { useGetCompany } from "../../hooks/config/useGetCompany";
import { InternCard } from "../Card";
import { Link } from "../Link";

import { Table, RowProps, ColumnProps } from "./Table";

export interface RitualProps extends StyleProps {
  ritualId: string;
  ritualLink: string;
  rows: RowProps[];
  minTopicWidth?: number;
}

const tagColumn = (column: ColumnProps) => {
  return column.tagColor ? (
    <Tag
      key={column.key}
      backgroundColor={column.tagColor}
      color="white"
      borderRadius="15px"
      p="2px 10px"
    >
      {column.content}
    </Tag>
  ) : (
    column.content
  );
};

export const Ritual = ({
  ritualId,
  ritualLink,
  rows,
  minTopicWidth,
  ...rest
}: RitualProps) => {
  const company = useGetCompany();
  const taggedRows = rows.map((row) => ({
    ...row,
    columns: row.columns.map((column) => ({
      ...column,
      content: tagColumn(column),
    })),
  }));

  return (
    <InternCard
      boxShadow="0px 0px 14px rgba(0, 0, 0, 0.03), 0px 0px 56px rgba(83, 83, 191, 0.07)"
      mt={6}
      py={5}
      px={7}
      {...rest}
    >
      <Flex flexDir={["column", "column", "column", "row"]}>
        <Table
          highlightFirstColumn
          flex="1"
          heads={["Topic", "Start date", "Recurrency", "Level"]}
          rows={taggedRows}
          minTopicWidth={minTopicWidth}
        />

        <Flex
          flexDir="column"
          justifyContent="space-between"
          ml={[0, 0, 0, 6]}
          mt={[4, 4, 4, 0]}
        >
          <ChakraLink
            isExternal
            href={`${ritualLink}?utm_source=${company}`}
            _hover={{ textDecoration: "none" }}
          >
            <Button w="100%">Participate</Button>
          </ChakraLink>
          <Link href={`/topic/${ritualId}`}>
            <Button
              mt={[2, 2, 2, 0]}
              bgColor="brand.600"
              w="100%"
              _hover={{
                backgroundColor: "brand.800",
              }}
            >
              View answers
            </Button>
          </Link>
        </Flex>
      </Flex>
    </InternCard>
  );
};
