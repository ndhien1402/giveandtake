import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
} from "@chakra-ui/react";
import ReactPaginate from "react-paginate";

const Users = () => {
  const handlePageClick = () => {
    console.log("handlePageClick");
  };
  return (
    <div>
      <div className="text-end pr-2">
        <Input placeholder="Tìm kiếm" width="auto" />
      </div>
      <TableContainer>
        <Table size="md">
          <Thead>
            <Tr>
              <Th>Tên</Th>
              <Th>SĐT</Th>
              <Th>Email</Th>
              <Th textAlign={"end"}>Thao tác</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.from(Array(10)).map((item, index) => {
              return (
                <Tr key={index}>
                  <Td>Nguyen Dinh Hien</Td>
                  <Td>0333056521</Td>
                  <Td>nguyendinhhien34@gmail.com</Td>
                  <Td textAlign={"end"}>...</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {/* <div className="mt-5 flex justify-center max-w-[300px]"> */}
      <div className="my-5 flex justify-center">
        <ReactPaginate
          nextLabel=">"
          breakLabel="..."
          previousLabel="<"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          pageCount={100}
          containerClassName="pagination flex"
          nextClassName="page-item"
          previousClassName="page-item"
          pageClassName="page-item"
          pageLinkClassName="page-link p-1 m-2"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          breakClassName="page-item mx-2"
          breakLinkClassName="page-link"
          activeClassName="active text-fuchsia-500"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default Users;
