import React, { useEffect, useState } from 'react';
import { ltiLaunch } from '@atomicjolt/lti-client';
import type { LaunchSettings } from '@atomicjolt/lti-client/types';

type LtiLaunchCheckProps = {
  children: React.ReactNode;
  stateValidation: LaunchSettings
};

const LtiLaunchCheck: React.FC<LtiLaunchCheckProps> = (props) => {
  const { children, stateValidation } = props;
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<boolean | null>(null);
  const [isTimeout, setIsTimeout] = useState<boolean>(false);
  const { stateVerified } = stateValidation;

  useEffect(() => {
    const launch = async () => {
      try {
        const v = await ltiLaunch(stateValidation);
        setIsValid(v);
      } catch (e: any) {
        setErrorMessage(e.message);
      }
    };
    if (stateVerified !== true) {
      launch();
    }
  }, [stateValidation]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTimeout(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isValid === true || stateVerified === true) {
    return <>{children}</>;
  }
  if (isValid === false) {
    return (
      <div className="aj-launch-error">
        <h1 className="aj-title">
          <i className="material-icons-outlined aj-error" aria-hidden="true">error_outline</i>
          <span>Invalid request. Please reload the page.</span>
        </h1>
        <p className="aj-text">
          {errorMessage}
        </p>
      </div>
    );
  } else if (isTimeout) {
    return (
      <div className="aj-launch-error">
        <h1 className="aj-title">
          <i className="material-icons-outlined aj-error" aria-hidden="true">error_outline</i>
          <span>Validation timed out. Please reload the page.</span>
        </h1>
        <p className="aj-text">
          {errorMessage}
        </p>
      </div>
    );
  }

  return null;
};

export default LtiLaunchCheck;
