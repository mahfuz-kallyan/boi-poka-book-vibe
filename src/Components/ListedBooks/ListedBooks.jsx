import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/addToDb';
import Book from '../Book/Book';


const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState('');
    // ideally we will directly get the read book list from database
    const allBooks = useLoaderData();
    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        const readList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
        setReadList(readList);
    }, []);

    const handleSort =(sortType)=>{
    setSort(sortType);
    }

    return (
        <div>
            <h1 className='text-3xl my-8'>Listed Books</h1>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">{sort ? `Sort by ${{sort}}` : 'Sort By'}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=>handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={()=> handleSort('No of Pages')}><a>No of Pages</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List{readList?.length}</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read</h2>
                    {
                        readList?.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;