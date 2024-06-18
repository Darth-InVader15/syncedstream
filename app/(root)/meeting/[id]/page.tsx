import React from 'react';
// the square bracket in the id folder is becuz
//the id is variable so using the [] it is marked in next js that the router url is variable
const Meeting = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      Meeting Room: #{params.id}
    </div>
  );
}

export default Meeting;
