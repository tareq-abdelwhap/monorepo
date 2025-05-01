class AuthController {
  public login(req: any, res: any) {
    // 1) Check if email exists

    // 2) Check if email verified / verify through OTP

    // 3) Check for phone Biometrics / Register for phone Biometrics

    res.json({
      status: 'success',
      message: 'Login Successful',
    });
  }
}

export default new AuthController();
