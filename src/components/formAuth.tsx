import Link from "next/link";
import { siteNameEnvironment } from "./siteEnv";

export interface ISigninform {
  email: string;
  password: string;
}

export interface ISignupform {
  name: string;
  email: string;
  password: string;
}

export async function Signin(formValues: ISigninform) {
  const resp = await fetch(`${siteNameEnvironment}/api/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formValues, null, 2)
  });
  const formJson = await resp.json();
  return formJson;
}

export async function Signup(formValues: ISignupform) {
  const resp = await fetch(`${siteNameEnvironment}/api/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formValues)
  });
  const formJson = await resp.json();
  return formJson;
}

export const FormExtra = ({ formType }) => {
  const formLink = formType.replace(" ", "").toLowerCase();
  return (
    <>
      <div className="alternative mt-3 mb-5">
        <h6 className="text-center">{`Or do you want to ${formType} ?`}</h6>
      </div>

      <div className="signup-login mt-5">
        <div className="m-auto">
          <Link href={`/auth/${formLink}`}>
            <a className="btn btn-outline-danger w-50">{formType}</a>
          </Link>
        </div>
      </div>
    </>
  );
};

/* export const showGroceryItem = index: number => {
  switch (grocery[index].name) {
    case "Apple":
      return <img className={style.appleImg} src={apple} />;
    case "Orange":
      return <img className={style.orangeImg} src={orange} />;
    case "Pringle":
      return <img className={style.pringlesImg} src={pringles} />;
    default:
      break;
  }
};
 */