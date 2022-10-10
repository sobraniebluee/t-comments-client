import React from 'react';
import styles from '../AuthDialog.module.scss'
import {Button} from "@mui/material";
import {AuthFormTypes, WindowTypes} from "../index";

interface MainWindowProps {
    setActiveWindow:(type: WindowTypes) => void
    authFormType: AuthFormTypes,
    switchAuthType: () => void
}

const MainWindow: React.FC<MainWindowProps> = ({authFormType, switchAuthType,setActiveWindow}) => {
    return (
        <div className={styles.modalMainButtons}>
            <div className={styles.formButtons}>
                 <Button className="mb-15" variant="contained" fullWidth onClick={() => setActiveWindow(authFormType === "__REGISTER__" ? "__REGISTER__" : "__LOGIN__")}>
                  <svg viewBox="0 0 24 24" id="v_email">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 8a4 4 0 014-4h12a4 4 0 014 4v8a4 4 0 01-4 4H6a4 4 0 01-4-4V8zm2.026-.32l6.947 4.156a2 2 0 002.054 0l6.947-4.157A2 2 0 0018 6H6a2 2 0 00-1.974 1.68zM20 9.993l-5.946 3.558a4 4 0 01-4.108 0L4 9.994V16a2 2 0 002 2h12a2 2 0 002-2V9.994z"
                    />
                  </svg>
                  Email
                </Button>
                <Button className="mb-15" variant="contained" fullWidth>
                  <svg fill="none" viewBox="0 0 24 24" id="v_vkontakte">
                    <path
                      d="M2 11.583c0-4.517 0-6.776 1.403-8.18C4.807 2 7.066 2 11.583 2h.834c4.517 0 6.776 0 8.18 1.403C22 4.807 22 7.066 22 11.583v.834c0 4.517 0 6.776-1.404 8.18C19.194 22 16.934 22 12.416 22h-.833c-4.517 0-6.776 0-8.18-1.404C2 19.194 2 16.934 2 12.416v-.833z"
                      fill="#2787F5"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.417 8.25H5.958c-.417 0-.5.196-.5.412 0 .387.495 2.302 2.303 4.836 1.205 1.73 2.903 2.669 4.449 2.669.927 0 1.042-.209 1.042-.568v-1.307c0-.417.087-.5.381-.5.216 0 .587.108 1.453.942.989.99 1.152 1.433 1.708 1.433h1.459c.416 0 .625-.209.505-.62-.132-.41-.604-1.004-1.23-1.709-.34-.401-.85-.834-1.005-1.05-.216-.279-.155-.402 0-.65 0 0 1.777-2.502 1.962-3.352.093-.309 0-.536-.44-.536h-1.46c-.37 0-.541.196-.634.412 0 0-.742 1.808-1.793 2.982-.34.34-.494.448-.68.448-.092 0-.226-.108-.226-.417V8.786c0-.37-.108-.536-.417-.536h-2.292c-.232 0-.372.172-.372.335 0 .352.526.433.58 1.422v2.147c0 .471-.085.556-.27.556-.495 0-1.698-1.815-2.411-3.893-.14-.404-.28-.567-.653-.567z"
                      fill="#fff"
                    />
                  </svg>
                    Vkontakte
                </Button>
                <Button className="mb-15" variant="contained" fullWidth>
                    <svg fill="none" viewBox="0 0 24 24" id="v_google">
            <path
              d="M6.433 14.086l-.696 2.599-2.545.054a9.955 9.955 0 01-1.191-4.74 9.95 9.95 0 011.118-4.598l2.266.415.992 2.252A5.944 5.944 0 006.056 12c0 .734.133 1.437.377 2.086z"
              fill="#FBBB00"
            />
            <path
              d="M21.825 10.132a10.02 10.02 0 01-.044 3.956 9.997 9.997 0 01-3.52 5.71l-2.854-.146-.404-2.521a5.96 5.96 0 002.564-3.043H12.22v-3.956h9.605z"
              fill="#518EF8"
            />
            <path
              d="M18.26 19.798A9.957 9.957 0 0112 22a9.998 9.998 0 01-8.808-5.26l3.24-2.654a5.946 5.946 0 008.57 3.045l3.258 2.667z"
              fill="#28B446"
            />
            <path
              d="M18.384 4.302l-3.24 2.652a5.948 5.948 0 00-8.767 3.114L3.12 7.401a9.998 9.998 0 018.88-5.4c2.427 0 4.652.863 6.384 2.301z"
              fill="#F14336"
            />
          </svg>
                    Google
                </Button>
            </div>
            <div className={styles.miniButtons}>
                <Button className="mb-15" variant="contained" fullWidth onClick={switchAuthType}>
                    {authFormType === "__REGISTER__" ? "Or Log in..." : "Or Register..."}
                </Button>
            </div>
        </div>
    );
};

export default MainWindow;