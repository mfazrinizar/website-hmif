import React, { createContext, useContext, useState } from "react";

// 1. Definisikan tipe data context
interface DashboardContextType {
  formData: string | undefined;
  setFormData: React.Dispatch<React.SetStateAction<string | undefined>>;
}

// 2. Buat context dengan tipe `DashboardContextType | null`
const DashboardContext = createContext<DashboardContextType | null>(null);

// 3. Hook untuk menggunakan context
export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within a DashboardProvider",
    );
  }
  return context;
};

// 3. Provider untuk menyimpan state global
export const DashboardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [formData, setFormData] = useState<string | undefined>(undefined);

  return (
    <DashboardContext.Provider value={{ formData, setFormData }}>
      {children}
    </DashboardContext.Provider>
  );
};
