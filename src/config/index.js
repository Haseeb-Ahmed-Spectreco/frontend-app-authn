const configuration = {
  // Cookies related configs
  SESSION_COOKIE_DOMAIN: process.env.SESSION_COOKIE_DOMAIN,
  REGISTER_CONVERSION_COOKIE_NAME: process.env.REGISTER_CONVERSION_COOKIE_NAME || null,
  USER_SURVEY_COOKIE_NAME: process.env.USER_SURVEY_COOKIE_NAME || null,
  // Features
  DISABLE_ENTERPRISE_LOGIN: process.env.DISABLE_ENTERPRISE_LOGIN || '',
  ENABLE_COOKIE_POLICY_BANNER: process.env.ENABLE_COOKIE_POLICY_BANNER || false,
  ENABLE_DYNAMIC_REGISTRATION_FIELDS: process.env.ENABLE_DYNAMIC_REGISTRATION_FIELDS || false,
  ENABLE_PROGRESSIVE_PROFILING_ON_AUTHN: process.env.ENABLE_PROGRESSIVE_PROFILING_ON_AUTHN || false,
  ENABLE_PERSONALIZED_RECOMMENDATIONS: process.env.ENABLE_PERSONALIZED_RECOMMENDATIONS || false,
  MARKETING_EMAILS_OPT_IN: process.env.MARKETING_EMAILS_OPT_IN || '',
  SHOW_CONFIGURABLE_EDX_FIELDS: process.env.SHOW_CONFIGURABLE_EDX_FIELDS || false,
  // Links
  ACTIVATION_EMAIL_SUPPORT_LINK: process.env.ACTIVATION_EMAIL_SUPPORT_LINK || null,
  AUTHN_PROGRESSIVE_PROFILING_SUPPORT_LINK: process.env.AUTHN_PROGRESSIVE_PROFILING_SUPPORT_LINK || null,
  LOGIN_ISSUE_SUPPORT_LINK: process.env.LOGIN_ISSUE_SUPPORT_LINK || null,
  PASSWORD_RESET_SUPPORT_LINK: process.env.PASSWORD_RESET_SUPPORT_LINK || null,
  PRIVACY_POLICY: process.env.PRIVACY_POLICY || null,
  TOS_AND_HONOR_CODE: process.env.TOS_AND_HONOR_CODE || null,
  TOS_LINK: process.env.TOS_LINK || null,
  // Miscellaneous
  GENERAL_RECOMMENDATIONS: process.env.GENERAL_RECOMMENDATIONS || [],
  INFO_EMAIL: process.env.INFO_EMAIL || '',
};

export default configuration;
