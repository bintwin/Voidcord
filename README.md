# Voidcord

A client mod for Yapper that adds themes, plugins, and custom client tweaks.

## What's included

- **Message Logger**: View deleted and edited messages right in chat with time and author tags.
- **Theme Loader**: Load custom CSS themes (comes with midnight dark theme built-in).
- **Quick CSS**: Live CSS editor to tweak the UI in real time.
- **Plugins**: Built-in plugins toggleable in Settings.

## Project layout

- `github/` - C# WPF installer source code and embedded client payload.
- `vercel/` - Landing page and website files.
- `deploy.bat` - Quick deploy script for Vercel.

## Building from source

Requires .NET SDK:
```bash
dotnet build -c Release github/VoidcordInstaller.csproj
```
The compiled exe will be in `github/bin/Release/net48/VoidcordInstaller.exe`.

## Installation

1. Grab `VoidcordInstaller.exe` from the [Releases](https://github.com/bintwin/Voidcord/releases) tab.
2. Close Yapper.
3. Run `VoidcordInstaller.exe` and hit **Install**.
4. Open Yapper and find the **Voidcord** tab in your Settings.

## License

[MIT](LICENSE). Unofficial modification; not affiliated with Yapper or Yapin'.
