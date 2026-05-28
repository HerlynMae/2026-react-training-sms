import { apiVersion, handleEscape } from "@/functions/functions-general";
import ModalArchive from "../partials/modal/ModalArchive";
import NoData from "../partials/NoData";
import ServerError from "../partials/ServerError";
import FetchingSpinner from "../partials/spinners/FetchingSpinner";
import TableLoading from "../partials/TableLoading";
import { StoreContext } from "../store/StoreContext";
import React from "react";
import ModalRestore from "@/partials/modal/ModalRestore";
import ModalDelete from "@/partials/modal/ModalDelete";

const ResponsiveTable = ({
  data,
  columns,
  pathUrl = "", //to update the statuses and delete api route url
  isLoading = false,
  isFetching = false,
  dataItem = {},
  queryKey = "", //string or array
  error = false,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const deletePathUrl = pathUrl.split("/");
  const deleteLastIndex = deletePathUrl[deletePathUrl.length - 1];
  const mainCol = columns.find((c) => c.mobileLabel === null);
  const topRightCol = columns.find((c) => c.mobilePosition === "topRight");
  const bodyColumns = columns.filter(
    (c) =>
      c.mobileLabel !== null &&
      c.mobilePosition !== "topRight" &&
      c.mobilePosition !== "bottomRight",
  );
  const bottomRight = columns.find((c) => c.mobilePosition === "bottomRight");
  handleEscape(() => handleClose());
  return (
    <>
      {/* Desktop table */}
      <div className="hidden xl:block overflow-x-auto relative">
        {/* this is when page is loaded but need to refetch the data */}
        {!isLoading && isFetching && <FetchingSpinner />}
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="pl-10 pr-6  py-3 text-left text-xs font-semibold text-gray-500 uppercase"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {isLoading ? (
              <tr>
                <td colSpan="100%" className="p-5">
                  {/* this is initial page loading */}
                  <TableLoading cols={2} count={20} />
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="100%" className="p-5">
                  {/* //this is error request */}
                  <ServerError />
                </td>
              </tr>
            ) : data.length == 0 ? (
              <tr>
                <td colSpan="100%" className="p-5">
                  {/* //this is no data */}
                  <NoData />
                </td>
              </tr>
            ) : (
              data.map((row) => (
                <tr key={row.id}>
                  {columns.map((col) => (
                    <td key={col.key} className="px-6 py-4">
                      {col.render(row)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      {/* when page is loaded but need to refetch the data */}
      {!isLoading && isFetching && <FetchingSpinner />}
      <div className="xl:hidden divide-y divide-gray-100">
        {isLoading ? (
          <div className=" p-5 ">
            <TableLoading cols={5} count={30} />
          </div>
        ) : error ? (
          <div className="flex justify-center items-center p-5" colSpan="100%">
            <ServerError />
          </div>
        ) : data.length == 0 ? (
          <div className="flex justify-center items-center p-5" colSpan="100%">
            <NoData />
          </div>
        ) : (
          data.map((row) => (
            <div key={row.id} className="p-4">
              <div className="flex justify-between items-start mb-3">
                {mainCol?.render(row)}
                {topRightCol?.render(row)}
              </div>
              <div className="flex justify-between items-center">
                <div>
                  {bodyColumns.map((col) => (
                    <div key={col.key}>
                      <small className="text-xs text-gray-500">
                        {col.mobileLabel}
                      </small>
                      {col.render(row)}
                    </div>
                  ))}
                </div>
                {bottomRight?.render(row)}
              </div>
            </div>
          ))
        )}
      </div>

      {/* action event */}
      {/* archive */}
      {store.isArchive && (
        <ModalArchive
          endpoint={`${apiVersion}${pathUrl}/active.php?id=${dataItem?.id ?? "0"}`}
          msg={`Are you sure you want to archive this record?`}
          successMsg={`Successfully archived`}
          item={dataItem}
          queryKey={queryKey}
        />
      )}
      {/* restore */}
      {store.isRestore && (
        <ModalRestore
          endpoint={`${apiVersion}${pathUrl}/active.php?id=${dataItem?.id ?? "0"}`}
          msg={`Are you sure you want to restore this record?`}
          successMsg={`Successfully restored`}
          item={dataItem}
          queryKey={queryKey}
        />
      )}
      {/* delete */}
      {store.isDelete && (
        <ModalDelete
          endpoint={`${apiVersion}${pathUrl}/${deleteLastIndex}.php?id=${dataItem?.id ?? "0"}`}
          msg={`Are you sure you want to delete this record?`}
          successMsg={`Successfully deleted`}
          item={dataItem}
          queryKey={queryKey}
        />
      )}
    </>
  );
};

export default ResponsiveTable;
