"use client";

import NotFoundPage from "@/components/ErrorPage";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/utils/api";
import { getAbout } from "@/services/about.service";

const ErrorPage = () => {
    const router = useRouter();

    useEffect(() => {
       const checkServerStatus = async () => {
          try {
             // Lakukan request ke endpoint sederhana untuk cek status server
             await getAbout()
 
             // Jika berhasil, arahkan kembali ke halaman utama atau halaman sebelumnya
             router.replace("/");
          } catch (error) {
             // Jika server masih down, tetap di halaman 500
             console.error("Server masih down, mencoba lagi...");
          }
       };
 
       // Cek status server setiap 5 detik
       const interval = setInterval(checkServerStatus, 5000);
 
       return () => clearInterval(interval); // Bersihkan interval ketika komponen unmount
    }, [router]);
    return (
      <>
        <NotFoundPage status={500}/>
      </>
    );
};

export default ErrorPage;
