import { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { AvatarGroup } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import SSearchBar from './style';

export default function SearchBar({ participants, setParticipants }) {
  const [search, setSearch] = useState([]);
  const [users, setUsers] = useState([]);
  const [autoResults, setAutoResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const currentUser = useSelector((state) => state.user);
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const deleteParticipant = (idParticipant) => {
    setParticipants((prev) => {
      const tempParticipants = prev.filter((tempPart) => {
        return idParticipant !== tempPart.id;
      });
      return tempParticipants;
    });
  };
  const addParticipants = (newParticipant) => {
    setParticipants((prev) => {
      const tempParticipants = [newParticipant, ...prev];
      return [...new Set(tempParticipants)];
    });
  };

  const addParticipant = (newParticipant) => {
    setParticipants((prev) => {
      const tempParticipants = [newParticipant, ...prev];
      return [...new Set(tempParticipants)];
    });
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user`)
      .then(({ data }) => {
        setUsers(data);
        setSuggestions(
          data.filter(
            (user) =>
              user.firstname.toUpperCase() !==
                currentUser.firstname.toUpperCase() &&
              user.lastname.toUpperCase() !== currentUser.lastname.toUpperCase()
          )
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (search.length) {
      setAutoResults(
        users.filter(
          (user) =>
            user.id !== currentUser.id &&
            (user.firstname.toUpperCase().includes(search.toUpperCase()) ||
              user.lastname.toUpperCase().includes(search.toUpperCase()))
        )
      );
    } else {
      setAutoResults([]);
    }
  }, [search]);

  return (
    <SSearchBar>
      <input
        type="search"
        value={search}
        onChange={handleSearchChange}
        placeholder="Suggestion ..."
      />
      <ul>
        {autoResults.map((res) => {
          return (
            <li key={res.id}>
              <button
                onClick={() => {
                  addParticipants(res);
                }}
                type="button"
              >
                <img src={res.picture} alt="" />
                {res.firstname} {res.lastname}
              </button>
            </li>
          );
        })}
      </ul>
      {participants[0] ? (
        <>
          <AvatarGroup className="avatars" max={5}>
            {suggestions.map((suggestion) => {
              return (
                <Avatar
                  onClick={() => {
                    addParticipant(suggestion);
                  }}
                  className="avatar"
                  alt="Stock avatar"
                  src={suggestion.picture}
                />
              );
            })}
          </AvatarGroup>
          <p>
            Vous allez partager cette réunion avec :
            {participants.map((participant) => {
              if (participants.length >= 2) {
                if (
                  participant.id === participants[participants.length - 1].id
                ) {
                  return ` ${participant.firstname} ${participant.lastname}. `;
                }
                if (
                  participant.id === participants[participants.length - 2].id
                ) {
                  return ` ${participant.firstname} ${participant.lastname} et `;
                }

                return ` ${participant.firstname} ${participant.lastname},`;
              }
              return ` ${participant.firstname} ${participant.lastname}.`;
            })}
          </p>
          <AvatarGroup className="avatars" max={5}>
            {participants.map((participant) => {
              return (
                <Avatar
                  key={participant.id}
                  onClick={() => {
                    deleteParticipant(participant.id);
                  }}
                  className="avatar"
                  alt="Stock avatar"
                  src={participant.picture}
                />
              );
            })}
          </AvatarGroup>
        </>
      ) : (
        <AvatarGroup className="avatars" max={5}>
          {suggestions.map((suggestion) => {
            return (
              <Avatar
                onClick={() => {
                  addParticipant(suggestion);
                }}
                className="avatar"
                alt="Stock avatar"
                src={suggestion.picture}
              />
            );
          })}
        </AvatarGroup>
      )}
    </SSearchBar>
  );
}
SearchBar.propTypes = {
  participants: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      firstname: propTypes.string,
      lastname: propTypes.string,
      password: propTypes.string,
      picture: propTypes.string,
      job: propTypes.string,
      isLogged: propTypes.number,
      cardNumber: propTypes.number,
      amount: propTypes.number,
      isInvited: propTypes.number,
      eggFree: propTypes.number,
      glutenFree: propTypes.number,
      gmoFree: propTypes.number,
      nutFree: propTypes.number,
      sugarFree: propTypes.number,
      cornFree: propTypes.number,
      dairyFree: propTypes.number,
      soyFree: propTypes.number,
      transFatsFree: propTypes.number,
      vegan: propTypes.number,
      shellfishFree: propTypes.number,
      porkFree: propTypes.number,
      vegetarian: propTypes.number,
      fridayFish: propTypes.number,
      onDiet: propTypes.number,
    })
  ),
  setParticipants: propTypes.func,
};

SearchBar.defaultProps = {
  participants: null,
  setParticipants: () => {},
};
