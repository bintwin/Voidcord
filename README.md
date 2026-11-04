# Voidcord

> Client modification for Yapper / Yapin' with custom themes, plugins, and tools.

---

## Features

- **Message Logger**: Displays deleted and edited messages with historical logs, author tags, and timestamp tracking.
- **Theme Manager**: Custom CSS theme loader with instant previews, auto-injection, and compatibility with popular themes.
- **Quick CSS**: Live CSS injection tab for tweaking Yapper's UI in real time.
- **Plugin System**: Modular plugins switchable in Settings with custom hotkeys and preferences.
- **Update Alerts**: Integrated notification system when new updates or injections are available.

---

## Installation

### Method 1: Installer (Recommended)
1. Go to the [Releases](https://github.com/bintwin/Voidcord/releases) section.
2. Download `VoidcordInstaller.exe`.
3. Close Yapper completely.
4. Run `VoidcordInstaller.exe` and click **Install**.
5. Launch Yapper. A new **Voidcord** tab will appear in Settings.

### Method 2: Manual Injection
1. Close Yapper.
2. Copy `voidcord.js` from this repository.
3. Paste it into your Yapper installation directory:
   ```
   %LOCALAPPDATA%\Programs\yapper-desktop\resources\voidcord.js
   ```
4. Restart Yapper.

---

## Building from Source

### Building the Installer
To build `VoidcordInstaller.exe` from source:
1. Open a terminal in the `installer/` directory.
2. Run:
   ```bash
   dotnet build -c Release
   ```
The compiled executable will be located in `installer/bin/Release/net48/VoidcordInstaller.exe`.

---

## Website

Visit our official website hosted on Vercel: [https://voidcord.vercel.app](https://voidcord.vercel.app)

---

## License

This project is released under the [MIT License](LICENSE). Unofficial modification; not affiliated with Yapper or Yapin'.

