import React from "react";
import { Button, Comment, Form, Grid, Icon } from "semantic-ui-react";

export default props => {
  return (
    <>
      <span className="text-muted mt-4 mb-4">
        el aviso <i className="uil uil-angle-down" />
      </span>
      <div className="card p-4 shadow mt-2" style={{ border: 0, height: 560 }}>
        <div className="d-flex bd-highligh ">
          <h3 className="bd-highlight w-100 font-weight-bold">Messages</h3>
          <button className="btn btn-dark">alert</button>
        </div>
        <hr />
        <div>
          <div className="text-center"></div>
          <Comment.Group>
            <Comment>
              <Comment.Avatar as="a" src="/images/avatar/small/joe.jpg" />
              <Comment.Content>
                <Comment.Author>Tom Lukic</Comment.Author>
                <Comment.Text>
                  This will be great for business reports. I will definitely
                  download this.
                </Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                  <Comment.Action>Save</Comment.Action>
                  <Comment.Action>Hide</Comment.Action>
                  <Comment.Action>
                    <Icon name="expand" />
                    Full-screen
                  </Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </div>
      </div>
    </>
  );
};

//     <Grid container style={{ padding: "1em .5em" }}>
//       <Grid.Row>
//         <Grid.Column>
//           <Comment.Group>
//             <Comment>
//               <Comment.Content>
//                 <Comment.Author>
//                   {" "}
//                   <Icon name="user circle outline" />
//                   Joe Henderson
//                 </Comment.Author>
//                 <Comment.Metadata>
//                   <div>1 day ago</div>
//                 </Comment.Metadata>
//                 <Comment.Text>
//                   <p>
//                     The hours, minutes and seconds stand as visible reminders
//                     that your effort put them all there.
//                   </p>
//                   <p>
//                     Preserve until your next run, when the watch lets you see
//                     how Impermanent your efforts are.
//                   </p>
//                 </Comment.Text>
//               </Comment.Content>
//             </Comment>

//             <Comment>
//               <Comment.Content>
//                 <Comment.Author>
//                   {" "}
//                   <Icon name="user circle" />
//                   Christian Rocha
//                 </Comment.Author>
//                 <Comment.Metadata>
//                   <div>2 days ago</div>
//                 </Comment.Metadata>
//                 <Comment.Text>I re-tweeted this.</Comment.Text>
//               </Comment.Content>
//             </Comment>

//             <Form reply>
//               <Form.TextArea />
//               <Button
//                 content="Send a Message"
//                 labelPosition="left"
//                 icon="edit"
//                 color="teal"
//               />
//             </Form>
//           </Comment.Group>
//         </Grid.Column>
//       </Grid.Row>
//     </Grid>
//   </>
// );
