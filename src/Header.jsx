import { useEffect, useState } from 'react';

export default function Header() {
  const [scroll, setScroll] = useState(0);

  // 첫 랜더링시 스크롤값 나오고 스크롤시에도 체크
  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
      console.log(window.scrollY);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    // 클린업 함수.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <header className="header">헤더{scroll}</header>;
}
