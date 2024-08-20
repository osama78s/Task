import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { IoIosSearch } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [write, setWrite] = useState(false);
  const [searchId, setSearchId] = useState('');
  const [resultSearch, setResultSearch] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getId = async () => {
      if (searchId !== '') {
        try {
          const res = await fetch(`https://reqres.in/api/users/${searchId}`);
          if (res.ok) {
            const data = await res.json();
            setResultSearch(data.data);
          } else {
            setResultSearch(null);
          }
        } catch (error) {
          setResultSearch(null);
        }
      } else {
        setResultSearch(null);
      }
    };
    getId();
  }, [searchId]);

  const handleFocus = () => setWrite(true);

  const handleBlur = () => setWrite(false);

  const handleResultClick = (id) => {
    setSearchId('');
    setResultSearch(null);
    navigate(`/${id}`);
    if (location.pathname !== '/'){
      window.location.reload()
    }
  };

  return (
    <div className='fixed left-0 top-0 w-full bg-[#f6f6f6] z-[100] shadow-sm'>
      <div className="container py-4 flex gap-5 xl:gap-0 items-center justify-between">
        <Link to={'/'}>
          <img className='w-[40px] max-w-full' src={logo} alt="Logo Image" />
        </Link>
        <div className="relative">
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className={` ${!write ? 'pl-9' : 'pl-2'} bg-transparent outline-none p-1 border text-[#4f4949] border-[#80808092] transition-all duration-300 focus:border-[#2d87dc] md:w-[250px] rounded-md`}
            type="text"
            placeholder='Search by User ID...'
          />
          {!write && (
            <IoIosSearch className='absolute top-1/2 left-[4px] text-[20px] transform -translate-y-1/2 text-[#80808092]' />
          )}
          {resultSearch && (
            <div className="absolute left-0 mt-1 w-full bg-white shadow-lg border rounded-md z-10">
              <div
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleResultClick(resultSearch.id)}
              >
                <div className="flex items-center">
                  <img src={resultSearch.avatar} alt='logo' className="w-8 h-8 rounded-full mr-3" />
                  <span>{resultSearch.first_name} {resultSearch.last_name}</span>
                </div>
                <p className="text-sm text-gray-500">ID: {resultSearch.id}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
