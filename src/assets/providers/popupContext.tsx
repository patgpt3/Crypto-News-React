import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context
interface PopupContextType {
  isPopupOpen: boolean;
  setPopupOpen: (isOpen: boolean) => void;
  usernameInput: string;
  setUsernameInput: (usernameInput: string) => void;
  itemComments: string[] | undefined;
  setItemComments: (itemComments: string[] | undefined) => void;
  togglePopup: () => void;
}

// Create the context with a default value (null for now)
const PopupContext = createContext<PopupContextType | null>(null);

// Create the provider component
interface PopupProviderProps {
  children: ReactNode; // ReactNode allows children to be anything React can render
}

export const PopupProvider: React.FC<PopupProviderProps> = ({ children }) => {
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [itemComments, setItemComments] = useState<string[] | undefined>([]);

  const togglePopup = () => setPopupOpen((prev) => !prev);

  return (
    <PopupContext.Provider
      value={{
        isPopupOpen,
        setPopupOpen,
        usernameInput,
        setUsernameInput,
        itemComments,
        setItemComments,
        togglePopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};

// Custom hook for easy access to the context
export const usePopup = (): PopupContextType => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};
