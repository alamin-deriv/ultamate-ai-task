import React, {useState} from 'react';
import { 
  Layout,
  Table,
  Tag,
  Text,
  Checkbox,
 } from "flexibull-meme";
import { Theme } from "../../config/theme";

import { stringToHslColor } from "../../utils/utils";


import {Filter, EmptyState } from '../../components';


const columns = [

  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Expression Count",
    dataIndex: "expressionCount",
    key: "expressionCount",
  },
  {
    title: "Expressions",
    dataIndex: "expressions",
    key: "expressions",
  },
  {
    title: "Reply",
    dataIndex: "reply",
    key: "reply",
  },
]; 


const PretrainedIntents = ({IntentsData}) => {

  const [multiIntents, setMultiIntents] = useState([]);
  const [reRender, setReRender] = useState(true);
  const [listOfIntents, setListOfIntents] = useState(IntentsData);

  // this function handle the multiple selection checkbox
  const handleSelectAll = (e) => {
    e.stopPropagation();

    // check if user select all intents, if yes, we grab all the intents ID
    if (e.target.checked) {
      const selectedAll = listOfIntents.map((item) => {
        return item.id;
      });
      setMultiIntents(selectedAll);
    } else {
      // if not, we clear the selection
      setMultiIntents([]);
    }
  };

  // this function handle the single select checkbox
  const handleSingleSelection = (e, id) => {
    e.stopPropagation();

     // check if user select one of the intents
    if (e.target.checked) {

      // if yes, we filtered the select intent object and add the id to our list of selections
      const intentData = listOfIntents.filter((item) => {
        return item.id === id;
      })[0];

      multiIntents.push(intentData.id);
      setMultiIntents(multiIntents);
      setReRender(!reRender)
    } else {
      // if not, we remove the unselected ID from the list of selections
      const removeId = multiIntents.filter((itemID) => {
        return itemID !== id;
      });
      setMultiIntents(removeId);
      setReRender(!reRender)
    }
  };

  // this function handle the search functionality
  const search = (searchInput) => {

    // if no search input, we return all the intents
    if (!searchInput) {
      setListOfIntents(IntentsData);
      return;
    }

    // if we have a search input grab all the intents names
    const listNames = IntentsData.map((intent) =>
      intent.name.toLowerCase()
    );

    // we filter only the names that match our search input
    const matches = listNames.filter((name) => {
      return name.includes(searchInput.toLowerCase());
    });

    let searchedIntents = [];
    
    // we loop through the list of intents and filter only ones that match
    matches.forEach((match) => {
      const searching = IntentsData.filter(
        (item) => item.name.toLowerCase() === match
      )[0];
      searchedIntents.push(searching);
    });

    setListOfIntents(searchedIntents);
  };

  const filterProps = {
    multiIntents,
    search
  }
  
    return (
      <div style={{width: "90vw", margin: "0 auto"}}>
        <Layout theme={Theme}>
         <Filter {...filterProps} />
         {listOfIntents.length ? (
          <Table stripped cellPad="13px 20px">
                        <table data-testid="data-table">
                          <thead>
                            <tr>
                              <th>
                                <Checkbox
                                  size="15px"
                                  elevate="high"
                                  onChange={handleSelectAll}
                                  
                                />
                              </th>
                              {columns &&
                                columns.map((elem, index) => {
                                  return (
                                    <th key={elem.key ? elem.key : index}>
                                      {elem.title}
                                    </th>
                                  );
                                })}
                            </tr>
                          </thead>
                          <tbody>
                            {listOfIntents.map((elem, index) => {
                              const reply = elem.reply.text;
                              const name = elem.name;
                              const description = elem.description;
                              const expressionCount = elem.trainingData.expressionCount;
                              const expressions = elem.trainingData.expressions

                              const id = elem.id;

                              return (
                                <tr key={id}>
                                  <td key="muliCheck" data-label="muliCheck">
                                    <Checkbox
                                      size="15px"
                                      elevate="high"
                                      checked={multiIntents.includes(id)}
                                      onChange={(e) => handleSingleSelection(e, id)}
                                    />
                                  </td>
                                  
                                  <td
                                    key="name"
                                    data-label="name"
                                  >
                                    <b>{name}</b>
                                  </td>
                                  <td
                                    key="description"
                                    data-label="description"
                                  >
                                    {description}
                                  </td>
                                  <td key="expressionCount" data-label="expressionCount">
                                    {expressionCount}
                                  </td>
                                  
                                  <td key="tag" data-label="tag">
                                    {expressions.length
                                      ? expressions.map((item, index) => {
                                          return (
                                            <Tag
                                              solid
                                              small
                                              color={stringToHslColor(
                                                item.text,
                                                70,
                                                80
                                              )}
                                              fontColor={stringToHslColor(
                                                item.text,
                                                50,
                                                30
                                              )}
                                              spaceRight
                                              style={{ marginBottom: "10px" }}
                                              key={item.id}
                                            >
                                              <Text
                                                bold
                                                uppercase
                                                size="9px"
                                                style={{ opacity: 0.8 }}
                                              >
                                                {item.text}
                                              </Text>
                                            </Tag>
                                          );
                                        })
                                      : "--/--"}
                                  </td>
                                  <td
                                    key="reply"
                                    data-label="reply"
                                  >
                                    {reply}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </Table>
         ) : (<EmptyState />)}
                      
        </Layout>
        </div>
    )
}



export default PretrainedIntents;
