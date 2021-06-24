import 'package:flutter/material.dart';

class Campo extends StatelessWidget {
  final void Function(String)? onChanged;
  final TextInputType? keyboardType;
  final String? initialValue;
  final TextStyle? style;
  final String? Function(String?)? validator;
  final void Function(String?)? onSaved;

  Campo({
    Key? key,
    this.onSaved,
    this.validator,
    this.initialValue,
    this.style,
    this.keyboardType,
    this.onChanged,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: TextFormField(
        onChanged: onChanged,
        keyboardType: keyboardType,
        style: style,
        initialValue: initialValue,
        validator: validator,
        onSaved: onSaved,
      ),
    );
  }
}
