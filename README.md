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

- `App.cs`: Application entry point.
- `MainWindow.cs`: Full C# source for the installer UI, dark theme styling, Yapper path detection, patching engine, and uninstallation logic.
- `VoidcordInstaller.csproj`: .NET WPF project file for building the Windows installer.
- `voidcord.js`: The Voidcord client script injected into Yapper.
- `midnight.theme.css`: Default midnight theme bundled with the installer.
- `voidicon.ico` / `voidicon.png`: Application branding and icons.

---

## Building from Source

To compile `VoidcordInstaller.exe`:
```bash
dotnet build -c Release
```
The compiled executable will be generated in `bin/Release/net48/VoidcordInstaller.exe`.

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
