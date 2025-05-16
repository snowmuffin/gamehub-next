"use client"
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Link from 'next/link';
import { basePath } from '@/next.config';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '@/shared/redux/languageSlice'; // 실제 경로에 맞게 수정 필요

const LanguageDropdown = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: any) => state.language.code);

  React.useEffect(() => {
    console.log('현재 언어 상태:', language);
  }, [language]);

  const handleSelect = (langCode: string) => {
    dispatch(setLanguage(langCode));
  };

  return (
    <Dropdown className="header-element country-selector dropdown">
      <Dropdown.Toggle as="a" href="#!" className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
        <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/us_flag.jpg`} alt="img" className="header-link-icon" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
        <Link
          className="dropdown-item d-flex align-items-center"
          href="#!"
          scroll={false}
          onClick={() => handleSelect('en')}
        >
          <span className="avatar avatar-xs lh-1 me-2">
            <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/us_flag.jpg`} alt="img" />
          </span>
          English
        </Link>
        <Link
          className="dropdown-item d-flex align-items-center"
          href="#!"
          scroll={false}
          onClick={() => handleSelect('ko')}
        >
          <span className="avatar avatar-xs lh-1 me-2">
            <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/flags/kr_flag.jpg`} alt="img" />
          </span>
          한국어
        </Link>
        {/* Add more languages as needed */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageDropdown;
