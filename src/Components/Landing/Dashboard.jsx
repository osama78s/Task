import React, { useState, useEffect } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`https://reqres.in/api/users?page=${page}`);
            const result = await res.json();
            setData(result.data);
            console.log(result.data)

        };
        getData();
    }, [page]);

    return (
        <div className="overflow-x-auto w-full">
            <Table>
                <Table.Head className='text-center'>
                    <Table.HeadCell>Avatar</Table.HeadCell>
                    <Table.HeadCell>Id</Table.HeadCell>
                    <Table.HeadCell>First Name</Table.HeadCell>
                    <Table.HeadCell>Last Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell></Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {data.map((user) => (
                        <Table.Row key={user.id} className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center hover:bg-[#f6f6f6] transition-all duration-300">
                            <Table.Cell className='flex items-center justify-center'>
                                <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="w-12 h-12 rounded-full" />
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{user.id}</Table.Cell>
                            <Table.Cell>{user.first_name}</Table.Cell>
                            <Table.Cell>{user.last_name}</Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>
                                <Link to={`${user.id}`} className='bg-[#2b71b4] rounded-md py-2 px-4 text-white'>
                                    Show Details
                                </Link>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => setPage((prevPage) => Math.max(prevPage - 1,1))}
                    className="bg-[#5c9da5] text-white py-2 px-4 rounded-l-md disabled:bg-[#b6dadf]"
                    disabled={page === 1}
                >
                    Previous
                </button>
                <button
                    onClick={() => setPage((prevPage) => prevPage + 1)}
                    className="bg-[#5c9da5] text-white py-2 px-4 rounded-r-md ml-2 disabled:bg-[#b6dadf]"
                    disabled={page === 2}
                >
                    Next
                </button>
            </div>
        </div>
    );
    
};

export default Dashboard;
