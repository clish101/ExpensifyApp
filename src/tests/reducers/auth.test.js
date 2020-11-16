import authReducer from '../../reducers/auth';

test('Should login user by user id', () => {
  const uid = 'abcdef12';
  const user = {};
  const state = authReducer(user, {
    type: 'LOGIN',
    uid,
  });
  expect(state.uid).toEqual(uid);
});

test('Should logout user and clear user uid', () => {
  const uid = 'abcdef12';
  const user = {};
  const state = authReducer(
    { uid },
    {
      type: 'LOGOUT',
    }
  );
  expect(state).toEqual({});
});
