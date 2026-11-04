using System;
using System.Windows;

namespace VoidcordInstallerApp;

public class App : Application
{
	[STAThread]
	public static void Main()
	{
		new App().Run(new MainWindow());
	}
}
