type CustomerModelMap = {
  [key: string]: string;
};

export const CONFIG = {
  API_KEY: "your_actual_api_key_here", // 请替换为实际的 API 密钥
  CF_ACCOUNT_LIST: [
    {
      account_id: "8d75f22605db146a86f364ff865aa219",
      token: "50--IhT1-cDbmaiM_tGXoJCrKCqYQFv9GK7yfpdN"
    },
    // 可以添加更多账户
  ],
  CF_TRANSLATE_MODEL: "@cf/qwen/qwen1.5-14b-chat-awq",
  CF_IS_TRANSLATE: true,
  USE_EXTERNAL_API: false,
  EXTERNAL_API: "",
  EXTERNAL_MODEL: "",
  EXTERNAL_API_KEY: "",
  FLUX_NUM_STEPS: 6,
  CUSTOMER_MODEL_MAP: {
    "DS-8-CF": "@cf/lykon/dreamshaper-8-lcm",
    "SD-XL-Bash-CF": "@cf/stabilityai/stable-diffusion-xl-base-1.0",
    "SD-XL-Lightning-CF": "@cf/bytedance/stable-diffusion-xl-lightning",
    "FLUX.1-Schnell-CF": "@cf/black-forest-labs/flux-1-schnell"
  } as CustomerModelMap,
};

export type Config = typeof CONFIG;