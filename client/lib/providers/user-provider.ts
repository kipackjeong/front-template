// import { create } from "zustand";
// import api from "../api";
// import { User } from "../types";

// export const userProvider = create<{
//   user?: User;
//   loading: boolean;
//   loadUser: () => void;
//   setUser: (user?: User) => void;
// }>((set) => ({
//   user: undefined,
//   loading: false,
//   loadUser: async () => {
//     set((state) => ({
//       ...state,
//       loading: true,
//     }));
//     try {
//       const user = await api.get("/user");
//       set((state) => ({
//         ...state,
//         user,
//       }));
//     } finally {
//       set((state) => ({
//         ...state,
//         loading: false,
//       }));
//     }
//   },
//   setUser: (user) =>
//     set((state) => ({
//       ...state,
//       user,
//     })),
// }));
