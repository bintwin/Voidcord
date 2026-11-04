using System;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using System.Windows.Shell;

namespace VoidcordInstallerApp;

public class MainWindow : Window
{
	private const string IconDownload = "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3";

	private const string IconWrench = "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z";

	private const string IconTrash = "M3 6h18 M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6 M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2 M10 11v6 M14 11v6";

	private const string IconMinus = "M5 12h14";

	private const string IconSquare = "M3 3h18v18H3z";

	private const string IconRestore = "M8 3H5a2 2 0 0 0-2 2v3 M21 8V5a2 2 0 0 0-2-2h-3 M3 16v3a2 2 0 0 0 2 2h3 M16 21h3a2 2 0 0 0 2-2v-3";

	private const string IconClose = "M18 6L6 18 M6 6l12 12";

	private const string IconPlay = "M5 3l14 9-14 9V3z";

	private TextBlock statusText;

	private TextBlock pathText;

	private TextBlock messageText;

	private Button installBtn;

	private Button repairBtn;

	private Button uninstallBtn;

	private Button launchBtn;

	private System.Windows.Shapes.Path maxIcon;

	public MainWindow()
	{
		Title = "Voidcord Installer";
		Width = 680.0;
		Height = 360.0;
		MinWidth = 560.0;
		MinHeight = 300.0;
		WindowStartupLocation = WindowStartupLocation.CenterScreen;
		Background = Brushes.Black;
		Foreground = Brushes.White;
		WindowStyle = WindowStyle.None;
		AllowsTransparency = true;
		Icon = LoadIcon();
		WindowChrome chrome = new WindowChrome
		{
			CaptionHeight = 0.0,
			ResizeBorderThickness = new Thickness(6.0),
			GlassFrameThickness = new Thickness(0.0),
			CornerRadius = new CornerRadius(0.0)
		};
		WindowChrome.SetWindowChrome(this, chrome);
		Border border = new Border
		{
			BorderBrush = BrushFromHex("#1c1c1c"),
			BorderThickness = new Thickness(1.0),
			Background = Brushes.Black
		};
		Grid grid = new Grid
		{
			RowDefinitions = 
			{
				new RowDefinition
				{
					Height = GridLength.Auto
				},
				new RowDefinition
				{
					Height = new GridLength(1.0, GridUnitType.Star)
				}
			}
		};
		FrameworkElement element = CreateTopBar();
		Grid.SetRow(element, 0);
		grid.Children.Add(element);
		FrameworkElement element2 = CreateContent();
		Grid.SetRow(element2, 1);
		grid.Children.Add(element2);
		border.Child = grid;
		Content = border;
		RoutedEventHandler value = (object s, RoutedEventArgs e) =>
		{
			RefreshState();
		};
		Loaded += value;
	}

	private FrameworkElement CreateTopBar()
	{
		Grid grid = new Grid();
		grid.Height = 42.0;
		grid.Background = Brushes.Black;
		Grid grid2 = grid;
		grid2.ColumnDefinitions.Add(new ColumnDefinition
		{
			Width = GridLength.Auto
		});
		grid2.ColumnDefinitions.Add(new ColumnDefinition
		{
			Width = new GridLength(1.0, GridUnitType.Star)
		});
		grid2.ColumnDefinitions.Add(new ColumnDefinition
		{
			Width = GridLength.Auto
		});
		Border border = new Border();
		border.Height = 1.0;
		border.Background = BrushFromHex("#141414");
		border.VerticalAlignment = VerticalAlignment.Bottom;
		Border element = border;
		Grid.SetColumnSpan(element, 3);
		grid2.Children.Add(element);
		StackPanel stackPanel = new StackPanel();
		stackPanel.Orientation = Orientation.Horizontal;
		stackPanel.Margin = new Thickness(14.0, 0.0, 0.0, 0.0);
		stackPanel.VerticalAlignment = VerticalAlignment.Center;
		StackPanel stackPanel2 = stackPanel;
		stackPanel2.MouseLeftButtonDown += (object s, MouseButtonEventArgs e) =>
		{
			if (e.ClickCount == 2)
			{
				ToggleMaximize();
			}
			else
			{
				DragMove();
			}
		};
		Image image = new Image();
		image.Source = LoadIcon();
		image.Width = 20.0;
		image.Height = 20.0;
		image.VerticalAlignment = VerticalAlignment.Center;
		Image image2 = image;
		RenderOptions.SetBitmapScalingMode(image2, BitmapScalingMode.HighQuality);
		stackPanel2.Children.Add(image2);
		TextBlock textBlock = new TextBlock();
		textBlock.Text = "Voidcord Installer";
		textBlock.FontWeight = FontWeights.Medium;
		textBlock.FontSize = 12.0;
		textBlock.Foreground = BrushFromHex("#a1a1aa");
		textBlock.Margin = new Thickness(10.0, 0.0, 0.0, 0.0);
		textBlock.VerticalAlignment = VerticalAlignment.Center;
		TextBlock element2 = textBlock;
		stackPanel2.Children.Add(element2);
		Grid.SetColumn(stackPanel2, 0);
		grid2.Children.Add(stackPanel2);
		Border border2 = new Border();
		border2.Background = Brushes.Transparent;
		Border border3 = border2;
		border3.MouseLeftButtonDown += (object s, MouseButtonEventArgs e) =>
		{
			if (e.ClickCount == 2)
			{
				ToggleMaximize();
			}
			else
			{
				DragMove();
			}
		};
		Grid.SetColumn(border3, 1);
		grid2.Children.Add(border3);
		StackPanel stackPanel3 = new StackPanel();
		stackPanel3.Orientation = Orientation.Horizontal;
		stackPanel3.VerticalAlignment = VerticalAlignment.Stretch;
		StackPanel stackPanel4 = stackPanel3;
		Button element3 = MakeWindowBtn("M5 12h14", 12.0, (object s, RoutedEventArgs e) =>
		{
			WindowState = WindowState.Minimized;
		});
		Button button = MakeWindowBtn("M3 3h18v18H3z", 10.5, (object s, RoutedEventArgs e) =>
		{
			ToggleMaximize();
		});
		maxIcon = (System.Windows.Shapes.Path)((Grid)button.Content).Children[0];
		Button element4 = MakeWindowBtn("M18 6L6 18 M6 6l12 12", 12.0, (object s, RoutedEventArgs e) =>
		{
			Close();
		});
		stackPanel4.Children.Add(element3);
		stackPanel4.Children.Add(button);
		stackPanel4.Children.Add(element4);
		Grid.SetColumn(stackPanel4, 2);
		grid2.Children.Add(stackPanel4);
		return grid2;
	}

	private FrameworkElement CreateContent()
	{
		Grid grid = new Grid();
		grid.Background = Brushes.Black;
		grid.Margin = new Thickness(36.0, 24.0, 36.0, 24.0);
		Grid grid2 = grid;
		grid2.RowDefinitions.Add(new RowDefinition
		{
			Height = GridLength.Auto
		});
		grid2.RowDefinitions.Add(new RowDefinition
		{
			Height = GridLength.Auto
		});
		grid2.RowDefinitions.Add(new RowDefinition
		{
			Height = new GridLength(1.0, GridUnitType.Star)
		});
		grid2.RowDefinitions.Add(new RowDefinition
		{
			Height = GridLength.Auto
		});
		StackPanel stackPanel = new StackPanel();
		TextBlock textBlock = new TextBlock();
		textBlock.Text = "Voidcord";
		textBlock.FontSize = 28.0;
		textBlock.FontWeight = FontWeights.Bold;
		textBlock.Foreground = Brushes.White;
		TextBlock element = textBlock;
		stackPanel.Children.Add(element);
		Grid.SetRow(stackPanel, 0);
		grid2.Children.Add(stackPanel);
		Grid grid3 = new Grid();
		grid3.Margin = new Thickness(0.0, 16.0, 0.0, 0.0);
		Grid grid4 = grid3;
		grid4.ColumnDefinitions.Add(new ColumnDefinition
		{
			Width = new GridLength(1.0, GridUnitType.Star)
		});
		grid4.ColumnDefinitions.Add(new ColumnDefinition
		{
			Width = GridLength.Auto
		});
		pathText = new TextBlock
		{
			Text = "Target: scanning...",
			FontSize = 11.5,
			Foreground = BrushFromHex("#525252"),
			VerticalAlignment = VerticalAlignment.Center,
			TextTrimming = TextTrimming.CharacterEllipsis
		};
		Grid.SetColumn(pathText, 0);
		grid4.Children.Add(pathText);
		statusText = new TextBlock
		{
			Text = "DETECTING...",
			FontSize = 11.0,
			FontWeight = FontWeights.SemiBold,
			Foreground = BrushFromHex("#a3a3a3"),
			VerticalAlignment = VerticalAlignment.Center
		};
		Grid.SetColumn(statusText, 1);
		grid4.Children.Add(statusText);
		Grid.SetRow(grid4, 1);
		grid2.Children.Add(grid4);
		StackPanel stackPanel2 = new StackPanel();
		stackPanel2.Orientation = Orientation.Horizontal;
		stackPanel2.VerticalAlignment = VerticalAlignment.Center;
		stackPanel2.Margin = new Thickness(0.0, 22.0, 0.0, 0.0);
		StackPanel stackPanel3 = stackPanel2;
		installBtn = CreateButton("Install Voidcord", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3", isPrimary: true, async (object s, RoutedEventArgs e) =>
		{
			await RunActionAsync(InstallAction);
		});
		repairBtn = CreateButton("Repair", "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z", isPrimary: false, async (object s, RoutedEventArgs e) =>
		{
			await RunActionAsync(RepairAction);
		});
		uninstallBtn = CreateButton("Uninstall", "M3 6h18 M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6 M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2 M10 11v6 M14 11v6", isPrimary: false, async (object s, RoutedEventArgs e) =>
		{
			await RunActionAsync(UninstallAction);
		});
		launchBtn = CreateButton("Launch Yapper", "M5 3l14 9-14 9V3z", isPrimary: false, (object s, RoutedEventArgs e) =>
		{
			LaunchYapper();
		});
		launchBtn.Visibility = Visibility.Collapsed;
		installBtn.Margin = new Thickness(0.0, 0.0, 10.0, 0.0);
		repairBtn.Margin = new Thickness(0.0, 0.0, 10.0, 0.0);
		uninstallBtn.Margin = new Thickness(0.0, 0.0, 10.0, 0.0);
		stackPanel3.Children.Add(installBtn);
		stackPanel3.Children.Add(repairBtn);
		stackPanel3.Children.Add(uninstallBtn);
		stackPanel3.Children.Add(launchBtn);
		Grid.SetRow(stackPanel3, 2);
		grid2.Children.Add(stackPanel3);
		messageText = new TextBlock
		{
			Text = "Ready to manage Voidcord.",
			FontSize = 11.5,
			Foreground = BrushFromHex("#525252"),
			Margin = new Thickness(0.0, 16.0, 0.0, 0.0)
		};
		Grid.SetRow(messageText, 3);
		grid2.Children.Add(messageText);
		return grid2;
	}

	private Button CreateButton(string text, string iconData, bool isPrimary, RoutedEventHandler handler)
	{
		Button button = new Button();
		button.Height = 36.0;
		button.Cursor = Cursors.Hand;
		button.Focusable = false;
		Button button2 = button;
		StackPanel stackPanel = new StackPanel();
		stackPanel.Orientation = Orientation.Horizontal;
		stackPanel.VerticalAlignment = VerticalAlignment.Center;
		stackPanel.HorizontalAlignment = HorizontalAlignment.Center;
		StackPanel stackPanel2 = stackPanel;
		string color = (isPrimary ? "#000000" : "#a1a1aa");
		System.Windows.Shapes.Path icon = MakePath(iconData, 13.0, color);
		icon.Margin = new Thickness(0.0, 0.0, 7.0, 0.0);
		stackPanel2.Children.Add(icon);
		TextBlock txt = new TextBlock
		{
			Text = text,
			FontSize = 11.5,
			FontWeight = (isPrimary ? FontWeights.Medium : FontWeights.Normal),
			Foreground = (isPrimary ? Brushes.Black : BrushFromHex("#d4d4d8")),
			VerticalAlignment = VerticalAlignment.Center
		};
		stackPanel2.Children.Add(txt);
		Border border = new Border
		{
			CornerRadius = new CornerRadius(5.0),
			Background = (isPrimary ? Brushes.White : BrushFromHex("#121212")),
			BorderBrush = (isPrimary ? Brushes.White : BrushFromHex("#242424")),
			BorderThickness = new Thickness(1.0),
			Padding = new Thickness(14.0, 0.0, 14.0, 0.0),
			Child = stackPanel2
		};
		button2.Template = new ControlTemplate(typeof(Button))
		{
			VisualTree = new FrameworkElementFactory(typeof(ContentPresenter))
		};
		button2.Content = border;
		button2.Click += handler;
		button2.MouseEnter += (object s, MouseEventArgs e) =>
		{
			if (isPrimary)
			{
				border.Background = BrushFromHex("#e5e5e5");
				border.BorderBrush = BrushFromHex("#e5e5e5");
			}
			else
			{
				border.Background = BrushFromHex("#1c1c1c");
				border.BorderBrush = BrushFromHex("#383838");
				txt.Foreground = Brushes.White;
				icon.Stroke = Brushes.White;
			}
		};
		button2.MouseLeave += (object s, MouseEventArgs e) =>
		{
			if (isPrimary)
			{
				border.Background = Brushes.White;
				border.BorderBrush = Brushes.White;
			}
			else
			{
				border.Background = BrushFromHex("#121212");
				border.BorderBrush = BrushFromHex("#242424");
				txt.Foreground = BrushFromHex("#d4d4d8");
				icon.Stroke = BrushFromHex("#a1a1aa");
			}
		};
		button2.PreviewMouseDown += (object s, MouseButtonEventArgs e) =>
		{
			if (isPrimary)
			{
				border.Background = BrushFromHex("#cccccc");
				border.BorderBrush = BrushFromHex("#cccccc");
			}
			else
			{
				border.Background = BrushFromHex("#262626");
				border.BorderBrush = BrushFromHex("#484848");
			}
		};
		button2.PreviewMouseUp += (object s, MouseButtonEventArgs e) =>
		{
			if (isPrimary)
			{
				border.Background = BrushFromHex("#e5e5e5");
				border.BorderBrush = BrushFromHex("#e5e5e5");
			}
			else
			{
				border.Background = BrushFromHex("#1c1c1c");
				border.BorderBrush = BrushFromHex("#383838");
			}
		};
		return button2;
	}

	private Button MakeWindowBtn(string iconData, double iconSize, RoutedEventHandler click)
	{
		Button button = new Button();
		button.Width = 40.0;
		button.Height = 40.0;
		button.Background = Brushes.Transparent;
		button.BorderThickness = new Thickness(0.0);
		button.Cursor = Cursors.Hand;
		button.Focusable = false;
		Button button2 = button;
		System.Windows.Shapes.Path path = MakePath(iconData, iconSize, "#666666");
		Grid grid = new Grid();
		grid.Background = Brushes.Transparent;
		Grid grid2 = grid;
		grid2.Children.Add(path);
		button2.Template = new ControlTemplate(typeof(Button))
		{
			VisualTree = new FrameworkElementFactory(typeof(ContentPresenter))
		};
		button2.Content = grid2;
		button2.Click += click;
		button2.MouseEnter += (object s, MouseEventArgs e) =>
		{
			path.Stroke = Brushes.White;
		};
		button2.MouseLeave += (object s, MouseEventArgs e) =>
		{
			path.Stroke = BrushFromHex("#666666");
		};
		button2.PreviewMouseDown += (object s, MouseButtonEventArgs e) =>
		{
			path.Stroke = Brushes.White;
		};
		button2.PreviewMouseUp += (object s, MouseButtonEventArgs e) =>
		{
			path.Stroke = Brushes.White;
		};
		return button2;
	}

	private void ToggleMaximize()
	{
		if (WindowState == WindowState.Maximized)
		{
			WindowState = WindowState.Normal;
			maxIcon.Data = Geometry.Parse("M3 3h18v18H3z");
		}
		else
		{
			WindowState = WindowState.Maximized;
			maxIcon.Data = Geometry.Parse("M8 3H5a2 2 0 0 0-2 2v3 M21 8V5a2 2 0 0 0-2-2h-3 M3 16v3a2 2 0 0 0 2 2h3 M16 21h3a2 2 0 0 0 2-2v-3");
		}
	}

	private static System.Windows.Shapes.Path MakePath(string data, double size, string color)
	{
		System.Windows.Shapes.Path path = new System.Windows.Shapes.Path();
		path.Data = Geometry.Parse(data);
		path.Stroke = BrushFromHex(color);
		path.StrokeThickness = 1.6;
		path.StrokeStartLineCap = PenLineCap.Round;
		path.StrokeEndLineCap = PenLineCap.Round;
		path.StrokeLineJoin = PenLineJoin.Round;
		path.Width = size;
		path.Height = size;
		path.Stretch = Stretch.Uniform;
		path.HorizontalAlignment = HorizontalAlignment.Center;
		path.VerticalAlignment = VerticalAlignment.Center;
		return path;
	}

	private static SolidColorBrush BrushFromHex(string hex)
	{
		return (SolidColorBrush)new BrushConverter().ConvertFromString(hex);
	}

	private BitmapImage LoadIcon()
	{
		try
		{
			Stream manifestResourceStream = Assembly.GetExecutingAssembly().GetManifestResourceStream("voidicon_image");
			if (manifestResourceStream != null)
			{
				BitmapImage bitmapImage = new BitmapImage();
				bitmapImage.BeginInit();
				bitmapImage.CacheOption = BitmapCacheOption.OnLoad;
				bitmapImage.StreamSource = manifestResourceStream;
				bitmapImage.EndInit();
				bitmapImage.Freeze();
				return bitmapImage;
			}
		}
		catch
		{
		}
		string text = System.IO.Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "voidicon.png");
		if (File.Exists(text))
		{
			try
			{
				BitmapImage bitmapImage = new BitmapImage();
				bitmapImage.BeginInit();
				bitmapImage.CacheOption = BitmapCacheOption.OnLoad;
				bitmapImage.UriSource = new Uri(text, UriKind.Absolute);
				bitmapImage.EndInit();
				bitmapImage.Freeze();
				return bitmapImage;
			}
			catch
			{
			}
		}
		return null;
	}

	private void SetMessage(string msg)
	{
		Dispatcher.Invoke(() =>
		{
			messageText.Text = msg;
		});
	}

	private string FindYapperPath()
	{
		string text = System.IO.Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "Programs", "yapper-desktop");
		if (Directory.Exists(text))
		{
			return text;
		}
		string baseDirectory = AppDomain.CurrentDomain.BaseDirectory;
		string fullPath = System.IO.Path.GetFullPath(System.IO.Path.Combine(baseDirectory, ".."));
		if (File.Exists(System.IO.Path.Combine(fullPath, "Yapper.exe")))
		{
			return fullPath;
		}
		if (File.Exists(System.IO.Path.Combine(baseDirectory, "Yapper.exe")))
		{
			return baseDirectory;
		}
		return text;
	}

	private void RefreshState()
	{
		string text = FindYapperPath();
		pathText.Text = "Target: " + text;
		string text2 = System.IO.Path.Combine(text, "resources", "app.asar");
		if (!Directory.Exists(text) || !File.Exists(text2))
		{
			statusText.Text = "NOT FOUND";
			SetMessage("Yapper directory not detected.");
		}
		else if (CheckIfAsarPatched(text2))
		{
			statusText.Text = "INSTALLED";
			SetMessage("Voidcord is currently installed.");
			launchBtn.Visibility = Visibility.Visible;
		}
		else
		{
			statusText.Text = "NOT INSTALLED";
			SetMessage("Ready to install Voidcord.");
			launchBtn.Visibility = Visibility.Collapsed;
		}
	}

	private bool CheckIfAsarPatched(string asarPath)
	{
		try
		{
			using FileStream fileStream = new FileStream(asarPath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
			byte[] array = new byte[Math.Min(fileStream.Length, 524288L)];
			fileStream.Read(array, 0, array.Length);
			string text = Encoding.UTF8.GetString(array);
			return text.Contains("voidcord.js");
		}
		catch
		{
			return false;
		}
	}

	private void SetButtonsEnabled(bool enabled)
	{
		installBtn.IsEnabled = enabled;
		repairBtn.IsEnabled = enabled;
		uninstallBtn.IsEnabled = enabled;
	}

	private async Task RunActionAsync(Action action)
	{
		SetButtonsEnabled(enabled: false);
		launchBtn.Visibility = Visibility.Collapsed;
		try
		{
			await Task.Run(action);
		}
		catch (Exception ex)
		{
			SetMessage("Error: " + ex.Message);
		}
		finally
		{
			SetButtonsEnabled(enabled: true);
			RefreshState();
		}
	}

	private void KillYapper()
	{
		Process[] processesByName = Process.GetProcessesByName("Yapper");
		foreach (Process process in processesByName)
		{
			try
			{
				process.Kill();
				process.WaitForExit(3000);
			}
			catch
			{
			}
		}
	}

	private string GetResourceString(string resourceName)
	{
		try
		{
			Stream manifestResourceStream = Assembly.GetExecutingAssembly().GetManifestResourceStream(resourceName);
			if (manifestResourceStream != null)
			{
				using (StreamReader streamReader = new StreamReader(manifestResourceStream, Encoding.UTF8))
				{
					return streamReader.ReadToEnd();
				}
			}
		}
		catch
		{
		}
		return "";
	}

	private string GetPayload()
	{
		string baseDirectory = AppDomain.CurrentDomain.BaseDirectory;
		string path = System.IO.Path.Combine(baseDirectory, "voidcord.js");
		if (File.Exists(path))
		{
			return File.ReadAllText(path, Encoding.UTF8);
		}
		string path2 = System.IO.Path.Combine(baseDirectory, "..", "voidcord.js");
		if (File.Exists(path2))
		{
			return File.ReadAllText(path2, Encoding.UTF8);
		}
		string path3 = System.IO.Path.Combine(baseDirectory, "..", "..", "..", "voidcord.js");
		if (File.Exists(path3))
		{
			return File.ReadAllText(path3, Encoding.UTF8);
		}
		string resourceString = GetResourceString("voidcord_payload");
		if (!string.IsNullOrEmpty(resourceString))
		{
			return resourceString;
		}
		return "";
	}

	private int RunCommand(string tool, string args)
	{
		ProcessStartInfo processStartInfo = new ProcessStartInfo();
		processStartInfo.FileName = "cmd.exe";
		processStartInfo.Arguments = "/c " + tool + " " + args;
		processStartInfo.CreateNoWindow = true;
		processStartInfo.UseShellExecute = false;
		processStartInfo.RedirectStandardOutput = true;
		processStartInfo.RedirectStandardError = true;
		ProcessStartInfo processStartInfo2 = processStartInfo;
		processStartInfo2.EnvironmentVariables.Remove("ELECTRON_RUN_AS_NODE");
		using Process process = Process.Start(processStartInfo2);
		process.WaitForExit(60000);
		return process.ExitCode;
	}

	private static void CopyDirectory(string sourceDir, string targetDir)
	{
		Directory.CreateDirectory(targetDir);
		string[] files = Directory.GetFiles(sourceDir);
		foreach (string text in files)
		{
			File.Copy(text, System.IO.Path.Combine(targetDir, System.IO.Path.GetFileName(text)), overwrite: true);
		}
		files = Directory.GetDirectories(sourceDir);
		foreach (string text2 in files)
		{
			CopyDirectory(text2, System.IO.Path.Combine(targetDir, System.IO.Path.GetFileName(text2)));
		}
	}

	private void InstallAction()
	{
		SetMessage("Stopping Yapper processes...");
		string text = FindYapperPath();
		string path = System.IO.Path.Combine(text, "resources");
		string text2 = System.IO.Path.Combine(path, "app.asar");
		string text3 = System.IO.Path.Combine(path, "app.asar.vanilla");
		string text4 = System.IO.Path.Combine(path, "app.asar.unpacked");
		string text5 = System.IO.Path.Combine(path, "app.asar.vanilla.unpacked");
		if (!Directory.Exists(text))
		{
			SetMessage("Error: Yapper folder not found.");
			return;
		}
		KillYapper();
		if (!File.Exists(text3) && File.Exists(text2))
		{
			File.Copy(text2, text3, overwrite: true);
		}
		if (Directory.Exists(text4) && !Directory.Exists(text5))
		{
			try
			{
				CopyDirectory(text4, text5);
			}
			catch
			{
			}
		}
		string text6 = (File.Exists(text3) ? text3 : text2);
		string text7 = System.IO.Path.Combine(System.IO.Path.GetTempPath(), "voidcord_inst_" + Guid.NewGuid().ToString("N"));
		SetMessage("Extracting package...");
		int num = RunCommand("npx --yes asar extract", "\"" + text6 + "\" \"" + text7 + "\"");
		if (num != 0 || !Directory.Exists(text7))
		{
			SetMessage("Extraction failed (code " + num + ").");
			return;
		}
		SetMessage("Injecting Voidcord...");
		string payload = GetPayload();
		string path2 = System.IO.Path.Combine(text7, "voidcord.js");
		File.WriteAllText(path2, payload, new UTF8Encoding(encoderShouldEmitUTF8Identifier: false));
		string path3 = System.IO.Path.Combine(path, "voidcord.js");
		try
		{
			File.WriteAllText(path3, payload, new UTF8Encoding(encoderShouldEmitUTF8Identifier: false));
		}
		catch
		{
		}
		string pathRoot = System.IO.Path.Combine(text, "voidcord.js");
		try
		{
			File.WriteAllText(pathRoot, payload, new UTF8Encoding(encoderShouldEmitUTF8Identifier: false));
		}
		catch
		{
		}
		string text8 = System.IO.Path.Combine(text, "voidcord", "themes");
		try
		{
			if (!Directory.Exists(text8))
			{
				Directory.CreateDirectory(text8);
			}
			string path4 = System.IO.Path.Combine(text8, "midnight.theme.css");
			if (!File.Exists(path4))
			{
				string text9 = GetResourceString("midnight_theme_payload");
				if (string.IsNullOrEmpty(text9))
				{
					string path5 = System.IO.Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "midnight.theme.css");
					if (File.Exists(path5))
					{
						text9 = File.ReadAllText(path5, Encoding.UTF8);
					}
				}
				if (!string.IsNullOrEmpty(text9))
				{
					File.WriteAllText(path4, text9, new UTF8Encoding(encoderShouldEmitUTF8Identifier: false));
				}
			}
			string path6 = System.IO.Path.Combine(text8, "quick.css");
			if (!File.Exists(path6))
			{
				File.WriteAllText(path6, "", new UTF8Encoding(encoderShouldEmitUTF8Identifier: false));
			}
		}
		catch
		{
		}
		string path7 = System.IO.Path.Combine(text7, "preload.js");
		if (File.Exists(path7))
		{
			string text10 = File.ReadAllText(path7);
			if (!text10.Contains("voidcordDesktop"))
			{
				string text11 = "\n\ntry {\n  const { contextBridge: vcCb, ipcRenderer: vcIpc } = require('electron');\n  vcCb.exposeInMainWorld('voidcordDesktop', {\n    toggleDevTools: () => vcIpc.invoke('voidcord:toggle-devtools'),\n    getThemes: () => vcIpc.invoke('voidcord:get-themes'),\n    openThemesDir: () => vcIpc.invoke('voidcord:open-themes-dir'),\n    saveQuickCss: (css) => vcIpc.invoke('voidcord:save-quick-css', css),\n    getQuickCss: () => vcIpc.invoke('voidcord:get-quick-css')\n  });\n} catch (e) {}\n";
				text10 += text11;
				File.WriteAllText(path7, text10, new UTF8Encoding(encoderShouldEmitUTF8Identifier: false));
			}
		}
		string path8 = System.IO.Path.Combine(text7, "main.js");
		if (File.Exists(path8))
		{
			string text12 = File.ReadAllText(path8);
			if (!text12.Contains("voidcord:get-themes"))
			{
				int num2 = text12.IndexOf("ipcMain.handle('yapper:screen-pick'");
				if (num2 != -1)
				{
					int num3 = text12.IndexOf("});", num2);
					if (num3 != -1)
					{
						string value = "\n  ipcMain.handle('voidcord:toggle-devtools', () => {\n    if (win && win.webContents) {\n      if (win.webContents.isDevToolsOpened()) win.webContents.closeDevTools();\n      else win.webContents.openDevTools({ mode: 'detach' });\n      return true;\n    }\n    return false;\n  });\n  ipcMain.handle('voidcord:get-themes', () => {\n    try {\n      const thDir = path.join(process.resourcesPath, '..', 'voidcord', 'themes');\n      if (!fs.existsSync(thDir)) fs.mkdirSync(thDir, { recursive: true });\n      const files = fs.readdirSync(thDir).filter(f => f.endsWith('.css'));\n      return files.map(f => {\n        const content = fs.readFileSync(path.join(thDir, f), 'utf8');\n        const match = content.match(/\\/\\*\\*[\\s\\S]*?\\*\\//);\n        const block = match ? match[0] : '';\n        const getField = (tag) => {\n          const m = block.match(new RegExp('@' + tag + '\\\\s+([^\\\\r\\\\n*]+)'));\n          return m ? m[1].trim() : '';\n        };\n        return {\n          id: f.replace(/\\.(theme\\.)?css$/i, '').replace(/[^a-zA-Z0-9_-]/g, '_'),\n          filename: f,\n          name: getField('name') || f.replace(/\\.(theme\\.)?css$/i, ''),\n          author: getField('author') || 'Unknown',\n          description: getField('description') || 'Custom theme file.',\n          version: getField('version') || '1.0.0',\n          website: getField('website') || '',\n          source: getField('source') || '',\n          css: content\n        };\n      });\n    } catch (e) {\n      return [];\n    }\n  });\n  ipcMain.handle('voidcord:open-themes-dir', () => {\n    try {\n      const thDir = path.join(process.resourcesPath, '..', 'voidcord', 'themes');\n      if (!fs.existsSync(thDir)) fs.mkdirSync(thDir, { recursive: true });\n      shell.openPath(thDir);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  });\n  ipcMain.handle('voidcord:save-quick-css', (_e, css) => {\n    try {\n      const thDir = path.join(process.resourcesPath, '..', 'voidcord', 'themes');\n      if (!fs.existsSync(thDir)) fs.mkdirSync(thDir, { recursive: true });\n      fs.writeFileSync(path.join(thDir, 'quick.css'), css || '', 'utf8');\n      return true;\n    } catch (e) {\n      return false;\n    }\n  });\n  ipcMain.handle('voidcord:get-quick-css', () => {\n    try {\n      const thDir = path.join(process.resourcesPath, '..', 'voidcord', 'themes');\n      const p = path.join(thDir, 'quick.css');\n      return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '';\n    } catch (e) {\n      return '';\n    }\n  });";
						text12 = text12.Insert(num3 + 3, value);
					}
				}
			}
			if (!text12.Contains("voidcord.js"))
			{
				string text13 = "wc.on('dom-ready', () => {";
				int num4 = text12.IndexOf(text13);
				if (num4 != -1)
				{
					string value2 = "\n    try {\n      const vcExt = path.join(process.resourcesPath, 'voidcord.js');\n      const vcRoot = path.join(process.resourcesPath, '..', 'voidcord.js');\n      const vcInt = path.join(__dirname, 'voidcord.js');\n      const vcFile = fs.existsSync(vcExt) ? vcExt : (fs.existsSync(vcRoot) ? vcRoot : vcInt);\n      if (fs.existsSync(vcFile)) {\n        const vcSrc = fs.readFileSync(vcFile, 'utf8');\n        wc.executeJavaScript(vcSrc).catch(() => {});\n      }\n    } catch (e) {}\n";
					text12 = text12.Insert(num4 + text13.Length, value2);
				}
			}
			File.WriteAllText(path8, text12, new UTF8Encoding(encoderShouldEmitUTF8Identifier: false));
		}
		SetMessage("Repacking package...");
		string args = "\"" + text7 + "\" \"" + text2 + "\" --unpack-dir \"node_modules/uiohook-napi\"";
		int num5 = RunCommand("npx --yes asar pack", args);
		try
		{
			Directory.Delete(text7, recursive: true);
		}
		catch
		{
		}
		if (num5 != 0)
		{
			SetMessage("Repack failed (code " + num5 + ").");
			return;
		}
		SetMessage("Voidcord successfully installed!");
		Dispatcher.Invoke(() => launchBtn.Visibility = Visibility.Visible);
	}

	private void RepairAction()
	{
		SetMessage("Repairing installation...");
		string path = FindYapperPath();
		string path2 = System.IO.Path.Combine(path, "resources");
		string destFileName = System.IO.Path.Combine(path2, "app.asar");
		string text = System.IO.Path.Combine(path2, "app.asar.vanilla");
		KillYapper();
		if (File.Exists(text))
		{
			File.Copy(text, destFileName, overwrite: true);
		}
		InstallAction();
	}

	private void UninstallAction()
	{
		SetMessage("Uninstalling Voidcord...");
		string path = FindYapperPath();
		string path2 = System.IO.Path.Combine(path, "resources");
		string destFileName = System.IO.Path.Combine(path2, "app.asar");
		string text = System.IO.Path.Combine(path2, "app.asar.vanilla");
		string text2 = System.IO.Path.Combine(path2, "app.asar.unpacked");
		string text3 = System.IO.Path.Combine(path2, "app.asar.vanilla.unpacked");
		KillYapper();
		if (File.Exists(text))
		{
			File.Copy(text, destFileName, overwrite: true);
			if (Directory.Exists(text3))
			{
				if (Directory.Exists(text2))
				{
					try
					{
						Directory.Delete(text2, recursive: true);
					}
					catch
					{
					}
				}
				try
				{
					CopyDirectory(text3, text2);
				}
				catch
				{
				}
			}
		}
		string path3 = System.IO.Path.Combine(path2, "voidcord.js");
		if (File.Exists(path3))
		{
			File.Delete(path3);
		}
		SetMessage("Voidcord uninstalled. Yapper is 100% vanilla.");
	}

	private void LaunchYapper()
	{
		string text = FindYapperPath();
		string text2 = System.IO.Path.Combine(text, "Yapper.exe");
		if (File.Exists(text2))
		{
			SetMessage("Launching Yapper...");
			Environment.SetEnvironmentVariable("ELECTRON_RUN_AS_NODE", null);
			ProcessStartInfo processStartInfo = new ProcessStartInfo();
			processStartInfo.FileName = text2;
			processStartInfo.WorkingDirectory = text;
			processStartInfo.UseShellExecute = true;
			ProcessStartInfo startInfo = processStartInfo;
			Process.Start(startInfo);
		}
	}
}
