import React from 'react';
import './Notes.css';

const notesData = [
    {
        title: 'JavaScript',
        description: 'Comprehensive JavaScript notes covering basics to advanced topics.',
        downloadLink: '/downloads/javascript-notes.pdf',
        imageUrl: '/notes.jpeg'
    },
    {
        title: 'CSS',
        description: 'Detailed CSS notes covering styling, layouts, and animations.',
        downloadLink: '/downloads/css-notes.pdf',
        imageUrl: '/notes.jpeg'
    },
    {
        title: 'HTML',
        description: 'Complete HTML notes covering elements, attributes, and best practices.',
        downloadLink: '/downloads/html-notes.pdf',
        imageUrl: '/notes.jpeg'
    },
    {
        title: 'Node.js',
        description: 'In-depth Node.js notes covering server-side development.',
        downloadLink: '/downloads/nodejs-notes.pdf',
        imageUrl: '/notes.jpeg'
    },
    {
        title: 'React',
        description: 'Extensive React notes covering components, state, and hooks.',
        downloadLink: '/downloads/react-notes.pdf',
        imageUrl: '/notes.jpeg'
    },
    {
        title: 'Express',
        description: 'Thorough Express notes covering middleware, routing, and APIs.',
        downloadLink: '/downloads/express-notes.pdf',
        imageUrl: '/notes.jpeg'
    }
];

const Notes = () => {
    return (
        <div className="notes-container">
            {notesData.map((note, index) => (
                <div className="note-card" key={index}>
                    <img src={note.imageUrl} alt={note.title} className="note-image" />
                    <h3 className="note-title">{note.title}</h3>
                    <p className="note-description">{note.description}</p>
                    <a href={note.downloadLink} className="note-download-button" download>Download</a>
                </div>
            ))}
        </div>
    );
}

export default Notes;
