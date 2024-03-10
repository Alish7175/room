import  { useRef, useState } from "react";
import useFetchBySearchQuery from "../../hooks/useFetchBySearchQuery";
import Pill from "../Pill/Pill";
// import debounce from "lodash.debounce";
// import { onChangeTextHandler } from "../../common/onChangeHandler/debouncedOnChangeTextHandler";

type SelectUserDataType = {id: number, fullName: string}

const MultiSelectInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState<SelectUserDataType[] | []>([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());
  // const [activeSuggestion, setActiveSuggestion] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  // custom hook to fetch users and use them as suggestions
  let usersSuggestions = useFetchBySearchQuery("/users", "users", searchTerm ) || [];
  //debounced text
  // const HandledebouncedText = debounce((text: string) => {
  //   setSearchTerm(text);
  // }, 500);

  //handle selected users list
  const selectUsersListHandler = (id: number , name: string) => {

      setSelectedUsers(prevState => [...prevState, {id, fullName: name}]);
      setSelectedUserSet(new Set([...selectedUserSet, id]));
      setSearchTerm("");
      if (inputRef.current !== null) {
        inputRef.current.focus();
      }
      
  };

  //handle remove user
  const handleRemoveUser = (user: SelectUserDataType) => {
    const updatedUsers = selectedUsers.filter(
      (selectedUser) => selectedUser.id !== user.id
    );
    setSelectedUsers(updatedUsers);

    const updatedIds = new Set(selectedUserSet);
    updatedIds.delete(user.id);
    setSelectedUserSet(updatedIds);
  };
  
  //list handler function
  const handleUserSuggestionList = () => {
      if(!(usersSuggestions && usersSuggestions?.length)) return <li>No Data Found !!</li>  
      return usersSuggestions && usersSuggestions?.length && usersSuggestions?.map(suggestion => {
      const {id, firstName, lastName, maidenName} = suggestion;
      const fullName = `${firstName} ${maidenName} ${lastName}`;
      return (!selectedUserSet.has(id) ? <li 
                key={id}
                className="flex items-center gap-10 py-2 px-2 cursor-pointer border-b border-gray-300 hover:bg-gray-300"
                onClick={() => selectUsersListHandler(id, fullName)}
              >   
                {fullName}
              </li>: <></>) 
    })
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      console.log("downArrow key pressed")
    }
  }
  console.log(selectedUsers);
  return (
    <div id="container__multiselect" className="flex relative h-full w-2/3 mx-auto">
      <div id="search_input_wrapper__multiselect" className=" w-full">
        {selectedUsers?.map((user) => {
          return <Pill key={user.id} text={user.fullName} onClick={() => handleRemoveUser(user)}/>
        })} 
        {/**input field with search suggestions */}
        <div className="w-auto flex items-center flex-wrap gap-8 px-5 ">
          <input 
            ref={inputRef}
            type="text" 
            className=" w-full mx-auto px-10 py-5 border-2 border-gray-300 focus:border-gray-500 rounded-full" 
            name="inputSearch" 
            value={searchTerm}
            id="search_input__multiselect" 
            placeholder="search users"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          {/**search suggestions */}
          {searchTerm?.trim() !== "" && <div className="relative w-full">
            <ul className="max-h-300 w-1/3 overflow-y-scroll list-none p-0 m-0 absolute bg-white border border-gray-300">
              {handleUserSuggestionList()}
            </ul>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default MultiSelectInput