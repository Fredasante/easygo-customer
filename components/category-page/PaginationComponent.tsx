"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

interface CategoryPaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange?: (page: number) => void;
}

const PaginationComponent: React.FC<CategoryPaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const renderPageNumbers = () => {
    const maxVisiblePages = 6;
    let pages = [];

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={i === currentPage}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, currentPage + 2);

      if (start > 1) {
        pages.push(
          <PaginationItem key={1}>
            <PaginationLink
              href="#"
              isActive={1 === currentPage}
              onClick={() => handlePageChange(1)}
            >
              1
            </PaginationLink>
          </PaginationItem>
        );
        if (start > 2) {
          pages.push(<PaginationEllipsis key="start-ellipsis" />);
        }
      }

      for (let i = start; i <= end; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={i === currentPage}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (end < totalPages) {
        if (end < totalPages - 1) {
          pages.push(<PaginationEllipsis key="end-ellipsis" />);
        }
        pages.push(
          <PaginationItem key={totalPages}>
            <PaginationLink
              href="#"
              isActive={totalPages === currentPage}
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }

    return pages;
  };

  return (
    <Pagination className="mt-5">
      <PaginationContent className="flex flex-wrap">
        <PaginationItem>
          <PaginationPrevious
            className="border border-gray-300 lg:mr-12"
            href="#"
            onClick={handlePrevious}
          >
            Previous
          </PaginationPrevious>
        </PaginationItem>

        {renderPageNumbers()}

        <PaginationItem>
          <PaginationNext
            className="border border-gray-300 lg:ml-12"
            href="#"
            onClick={handleNext}
          >
            Next
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
