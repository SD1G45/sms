import { useLazyQuery, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { EMAIL_RESET_CODE_QUERY } from "../../../page-queries/business/users";
import { useBusinessState } from "../../../context/BusinessContext/BusinessContext";
import { EDIT_USER_EMAIL_MUTATION } from "../../../page-mutations/users"

const ChangeEmail = () => {
  const router = useRouter();
  const businessState = useBusinessState();
  const code = String(router.query.code);
  const [newEmail, setNewEmail] = useState("");

  const [getEmailReset, getEmailResetQueryResult] = useLazyQuery(EMAIL_RESET_CODE_QUERY);

  useEffect(() => {
    getEmailReset({
      variables: {
        value: code,
    },
  });
  }, [getEmailReset, businessState]);

  const [changeEmailMutation] = useMutation(EDIT_USER_EMAIL_MUTATION, {
    errorPolicy: "all",
  });

  const onSubmit = async () => {
    if (newEmail.length < 3) {
      alert("Must enter valid email");
      return;
    }

    try {
      const { data, errors } = await changeEmailMutation({
        variables: {
          code,
          newEmail
        }
      });

      if (errors && errors.length > 0 || !data) {
          alert("error");
          return;
      }

      if (data.editUserEmailMutation) {
        alert("success");
      } else {
          alert("fail");
      }
    } catch (e) {
      console.log(e);
    }
  }

  const email = getEmailResetQueryResult.data != undefined
    ? getEmailResetQueryResult.data.emailResetCode.email : "LOADING";

  return( 
  <>
    <input type="text" 
    placeholder='Enter new email'
    value={newEmail}
    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
      setNewEmail(event.target.value);
    }}/>
    <button onClick={onSubmit}>
      change email
    </button>
  </>
  );
}

export default ChangeEmail; 