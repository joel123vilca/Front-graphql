import React from 'react';
 import {gql} from 'apollo-boost';
import { useQuery } from 'react-apollo';

const GET_MESSAGES = gql`
    { messages {
        title
        content
        author
    }
    }`;
const MessageList = () => {
    const {loading, error, data } = useQuery(GET_MESSAGES)
    if(loading) return <p>loading Messagess ...</p>
    if(error) return <p>error</p>
    return(
        <div className="row">
            <div className="col-md-6 offset-md-3">
                {
                    data.messages.map(({title,content,author}, index) => (
                        <div key={index} className="card m-2">
                            <div className="card-body">
                                <h4>{title}</h4>
                                <p>{content}</p>
                                <p>{author}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MessageList;