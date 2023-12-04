import { Metadata } from "next";
import React from "react";
import CommingSoon from "~/components/CommingSoon";

export const metadata: Metadata = {
  title: "GuestBook | Uditya",
};

function GuestBook() {
  return (
    <>
      <CommingSoon />
    </>
  );
}

export default GuestBook;
