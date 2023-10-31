
import { useEffect, useState } from "react";
import { all_teachers, teacher_own_subject } from "../Request";
import Teacher from "./Teacher";

export default function Home() {

  return (
    <>
    <Teacher />
    </>
  );
}
