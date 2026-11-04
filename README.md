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

## Project Structure

- `github/`: Windows WPF installer application source files (`App.cs`, `MainWindow.cs`, `VoidcordInstaller.csproj`, `voidcord.js`, `midnight.theme.css`, icons).
- `vercel/`: Official website files and deployment configuration.
- `deploy.bat`: Quick script to deploy the website to Vercel.

---

## Building from Source

To compile `VoidcordInstaller.exe`:
```bash
dotnet build -c Release github/VoidcordInstaller.csproj
```
The compiled executable will be generated in `github/bin/Release/net48/VoidcordInstaller.exe`.

---

## Installation

1. Go to the [Releases](https://github.com/bintwin/Voidcord/releases) section.
2. Download `VoidcordInstaller.exe`.
3. Close Yapper completely.
4. Run `VoidcordInstaller.exe` and click **Install**.
5. Launch Yapper. A new **Voidcord** tab will appear in Settings.

---

## License

This project is released under the [MIT License](LICENSE). Unofficial modification; not affiliated with Yapper or Yapin'.
