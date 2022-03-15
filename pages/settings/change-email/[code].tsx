import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { EDIT_USER_EMAIL_MUTATION } from "../../../page-mutations/users"

const ChangeEmail = () => {
  const [text, setText] = useState("loading");
  const router = useRouter();
  const code = String(router.query.code);
  const newEmail = String(router.query.email);
  
  const [changeEmailMutation] = useMutation(EDIT_USER_EMAIL_MUTATION, {
    errorPolicy: "all",
  });

  useEffect(() => {
  async function changeEmail () {
    try {
      const { data, errors } = await changeEmailMutation({
        variables: {
          code,
          newEmail,
        }
      });

      if (errors && errors.length > 0 || !data) {
          alert("error");
          return;
      }

      if (data.editUserEmailMutation) {
        setText("Email officially changed");
      } else {
          alert("fail");
      }
    } catch (e) {
      console.log(e);
    }
  }
  changeEmail();
}, []);

  return( 
  <div>
  {text}
  </div>
  );
}

export default ChangeEmail; 