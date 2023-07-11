import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'react-bootstrap';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

function Students() {
  const dropdownRefs = useRef({});
  const [dropdownStates, setDropdownStates] = useState({});

  useEffect(() => {
    const handleOutsideClick = (event) => {
      Object.keys(dropdownRefs.current).forEach((studentId) => {
        if (dropdownRefs.current[studentId] && !dropdownRefs.current[studentId].contains(event.target)) {
          setDropdownStates((prevState) => ({
            ...prevState,
            [studentId]: false
          }));
        }
      });
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleDropdownToggle = (studentId) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [studentId]: !prevState[studentId]
    }));
  };

  const students = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main St'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      address: '456 Elm St'
    },
    // Add more student objects as needed
  ];

  return (
    <div className="content">
      <form className="search-form">
        <input className="search" type="search" placeholder="Search for student..." />
      </form>
      <div className="student-container">
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.address}</td>
                  <td className="meatball-icons" ref={(ref) => (dropdownRefs.current[student.id] = ref)}>
                    <Dropdown show={dropdownStates[student.id]} onToggle={() => handleDropdownToggle(student.id)}>
                      <Dropdown.Toggle variant="link" id={`dropdown-basic-${student.id}`}>
                        <FontAwesomeIcon icon={faEllipsisH} />
                      </Dropdown.Toggle>
                      {dropdownStates[student.id] && (
                      <Dropdown.Menu>
                        <div className="dropdown-items">
                          <Dropdown.Item>Edit</Dropdown.Item>
                          <Dropdown.Item>Delete</Dropdown.Item>
                        </div>
                      </Dropdown.Menu>)}
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Students;
