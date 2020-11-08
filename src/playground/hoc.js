import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Details: {props.info}</p>
  </div>
);

// const HighOrderComponent = (WrapperComponent) => {
//   return (props) => (
//     <div>
//       {props.isAdmin && (
//         <p>You are seeing this message because you're an admin</p>
//       )}
//       <WrapperComponent {...props} />
//     </div>
//   );
// };

const requireAuthenticationInfo = (WrapperComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated && (
        <p>You are seeing this message because you're an admin</p>
      )}

      {props.isAuthenticated ? (
        <WrapperComponent {...props} />
      ) : (
        <p>Please Log in to continue</p>
      )}
    </div>
  );
};

// const AdminInfo = HighOrderComponent(Info);
const AuthInfo = requireAuthenticationInfo(Info);

// ReactDOM.render( <AdminInfo info="I just feel so low today" isAdmin={true} />,document.getElementById('app'));
ReactDOM.render(
  <AuthInfo info="I just feel so low today" isAuthenticated={true} />,
  document.getElementById('app')
);
