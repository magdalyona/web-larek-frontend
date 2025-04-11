export const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
export const CDN_URL = `${process.env.API_ORIGIN}/content/weblarek`;

export const settings = {
    headers: {
        authorization: `${process.env.API_TOKEN}`,
        'Content-Type': 'application/json',
    },
};

export const categories = new Map([

    ["дополнительное", "additional"],
    ["софт-скил", "soft"],
    ["кнопка", "button"],
    ["хард-скил", "hard"],
    ["другое", "other"],

]);
