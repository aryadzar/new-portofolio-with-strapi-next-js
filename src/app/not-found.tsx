'use client';

import NotFoundPage from '@/components/ErrorPage';
import Link from 'next/link';

const NotFound = () => {
   return (
      <>
         <NotFoundPage status={404} />
      </>
   );
};

export default NotFound;
