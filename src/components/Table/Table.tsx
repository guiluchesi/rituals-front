import {
  TableContainer,
  Table as ChakraTable,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  StyleProps,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";

export interface ColumnProps {
  key: string;
  content: ReactNode;
  tagColor?: string;
}

export interface RowProps {
  key: string;
  columns: ColumnProps[];
}

export interface TableProps extends StyleProps {
  heads: string[];
  rows: RowProps[];
  minTopicWidth?: number;
  highlightFirstColumn?: boolean;
}

export const Table: FC<TableProps> = ({
  heads,
  rows,
  minTopicWidth = 0,
  highlightFirstColumn = false,
  ...rest
}) => {
  return (
    <TableContainer {...rest}>
      <ChakraTable display={["flex", "flex", "table"]}>
        <Thead>
          <Tr
            display={["flex", "flex", "table-row"]}
            flexDir={["column", "column"]}
          >
            {heads.map((head, index) => (
              <Th
                key={head}
                minWidth={index === 0 ? `${minTopicWidth}px` : "unset"}
                minHeight={["46px", "46px", "unset"]}
                display={["flex", "flex", "table-cell"]}
                alignItems={["center", "center", "center"]}
              >
                {head}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody flex="1">
          {rows.map((row) => (
            <Tr
              key={row.key}
              display={["flex", "flex", "table-row"]}
              flexDir={["column", "column"]}
            >
              {row.columns.map((column, index) => (
                <Td
                  key={`${row.key}-${column.key}`}
                  fontWeight={
                    index === 0 && highlightFirstColumn ? "bold" : "normal"
                  }
                  minHeight={["46px", "46px", "unset"]}
                >
                  {column.content}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};
