def home
  main_menu
  menu_choice = get_user_selection("Please enter your selection: ").downcase
  until menu_choice == "q"
    case menu_choice
    when 'b'
      basic_calculator
    when 'a'
      advanced_calculator
    else
      puts "Invalid Selection"
    end
    main_menu
    menu_choice = get_user_selection("Please enter your selection: ").downcase
  end
end


def main_menu
  puts "(b) - basic calculator"
  puts "(a) - advanced calculator"
  puts "(q) - quit"
end


def basic_menu
  puts "(a) - arithmetic"
  puts "(s) - subtraction"
  puts "(m) - multiplication"
  puts "(d) - division"
  puts "(q) - quit"
end


def get_user_selection(message)
  print message
  gets.chomp
end


def basic_calculator
  basic_menu
  menu_choice = get_user_selection("Please enter the type of calculating you'd like to do (a, s, m, or d) ").downcase

  until menu_choice == "q"
    case menu_choice
    when "a"
      puts "basic arithmetic"
    when "s"
      puts "basic subtraction"
    when "m"
      puts "basic multiplication"
    when "d"
      puts "basic division"
    else
      puts "Invalid selection"
    end
    basic_menu
    menu_choice = get_user_selection("Please enter the type of calculating you'd like to do (a, s, m, or d) ").downcase
  end
end


def advanced_calculator
  puts "coming soon..."
end


home
