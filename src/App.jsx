import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Notes from './components/Notes';
import './App.css';

const cardData = [
    {
        title: 'Supreme Batch',
        imageUrl: '/2.jpeg',
        description: 'Complete DSA Batch',
        buttonText: 'Enroll Now!',
        buttonLink: 'https://youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&si=sOHyceF-GQ2lyQEr'
    },
    {
        title: 'Prayash Batch',
        imageUrl: '/3.jpeg',
        description: 'Complete Frontend Developer Batch',
        buttonText: 'Enroll Now!',
        buttonLink: 'https://youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n&si=ASOba_JTRnSFRFwG'
    },
    {
        title: 'Shreasth Batch',
        imageUrl: '/1.jpeg',
        description: 'Complete Backend Developer Batch',
        buttonText: 'Enroll Now!',
        buttonLink: 'https://youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&si=AFAJAkS5CUS9oupi'
    },
    {
        title: 'Lakshay Batch',
        imageUrl: '/4.jpeg',
        description: 'Complete Android Developer Batch',
        buttonText: 'Enroll Now!',
        buttonLink: 'https://youtube.com/playlist?list=PLjVLYmrlmjGdDps6HAwOOVoAtBPAgIOXL&si=XwlTIseET6noTOOU'
    }
];

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCards = cardData.filter(card => 
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Router>
            <div className="app">
                <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <Routes>
                    <Route path="/" element={
                        <div className="content">
                            {filteredCards.map((card, index) => (
                                <Cards
                                    key={index}
                                    title={card.title}
                                    imageUrl={card.imageUrl}
                                    description={card.description}
                                    buttonText={card.buttonText}
                                    buttonLink={card.buttonLink}
                                />
                            ))}
                        </div>
                    } />
                    <Route path="/notes" element={<Notes />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
