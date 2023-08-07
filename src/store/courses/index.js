import create from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'



const INITIAL_COURSES_STATE = {

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


const useCourseStore = create((set) => ({
    courseState: INITIAL_COURSES_STATE,


    selectCourse: (course) => {

        const data = course;
        console.log("Store", data);

        try {
            if (data.name) {

                persist((set)(
                    (state) => ({
                        ...state,
                        courseState: {
                            ...state.courseState,
                            select: {
                                ...INITIAL_COURSES_STATE.select,
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

export default useCourseStore;