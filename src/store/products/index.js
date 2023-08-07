import create from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'



const INITIAL_PRODUCTS_STATE = {

    select: {
        loading: false,
        success: {
            ok: false,
            data: {},
        },
        failure: {
            error: false,
            message: "",
        },
    }

};


const useProductsStore = create((set) => ({
    productState: INITIAL_PRODUCTS_STATE,


    selectProduct: (product) => {

        const data = product;
        console.log("Product", data);

        try {
            if (data.name) {

                persist((set)(
                    (state) => ({
                        ...state,
                        productState: {
                            ...state.productState,
                            select: {
                                ...INITIAL_PRODUCTS_STATE.select,
                                loading: false,
                                success: {
                                    ok: true,
                                    data: data,
                                },
                            }
                        },
                    })
                ),
                    {
                        name: 'course-storage', // name of the item in the storage (must be unique)
                        storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
                    });
            }
        }
        catch (e) {
            console.error(e);
        }
    },


}));

export default useProductsStore;