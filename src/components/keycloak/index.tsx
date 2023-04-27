import React from 'react';
import {ReactKeycloakProvider,useKeycloak as originalUseKeycloak} from "@react-keycloak/web";
import type {KeycloakInstance} from "keycloak-js";
import {AuthProviderProps} from "@react-keycloak/core";


export interface CustomReactKeycloakProps extends AuthProviderProps<KeycloakInstance> {

}

const CustomReactKeycloakProvider: React.FC<CustomReactKeycloakProps> = (props) => {
    const { authClient, children, ...rest } = props;

    return (
        <ReactKeycloakProvider authClient={authClient} {...rest}>
            {children}
        </ReactKeycloakProvider>
    );
};

export const useKeycloak = originalUseKeycloak;

export default CustomReactKeycloakProvider;
